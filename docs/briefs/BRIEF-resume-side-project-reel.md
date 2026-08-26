# Brief: side-project highlight reel on the resume

Authored in Cowork, for execution in Claude Code. Written 2026-08-25.

## Goal

Replace quests 8 and 9 in `resumeContent/src/data/quests.data.tsx` with a
highlight reel of real side projects, each entry grounded in evidence
pulled from commit history.

Commit history is an input to the writing, not output on the page. No
GitHub API calls at runtime, no contribution heatmap, no repo cards. The
history is read to make the claims specific and checkable, then it stays
behind the scenes.

## Current state, and why this is worth doing

Quest 8 ("The Game Developer's Path") carries one accomplishment:
"Taught myself Unity game development, focusing on C# programming and
game mechanics." That sits against a real Unity 6 codebase with a
milestone authoring contract, a kill-criteria design method, and a
verification discipline strict enough to have its own rules.

Quest 9 ("Mastering the AI Frontier") lists tool names: ChatGPT, Udio,
MidJourney, Oogabooga, Replit. Five accomplishments, ten "learnings",
and not one artifact.

Neither entry names a thing that was built, a constraint that was
worked against, or a decision that was made. A reader cannot tell
whether any of it shipped. Every other quest on the page names systems
and outcomes. These two read like a hobbies line.

Also: quest 9 contains a typo, "Expplored", at
`quests.data.tsx` line 555.

## Three structural gaps to settle before writing content

Found while reading the SPA. Content work is largely wasted until at
least the first one is resolved.

### 1. Side projects never reach the printed resume

`components/ResumeView/ResumeView.tsx` builds `resumeData` from
`isCareerQuest` (`type === 'career'` and a company that is not
"Personal Project") plus `type === 'education'`. Hobby and independent
quests are filtered out. ResumeView is what feeds `utils/pdfGenerator.ts`.

So a highlight reel written today would be invisible in the artifact
most likely to be read by a hiring manager.

Decision needed: does ResumeView gain a projects section, or do the
reel entries get retyped as something ResumeView already accepts? A
projects section is the honest answer. Retyping side projects as
`career` would misrepresent them.

### 2. Side projects are absent from the timeline

`components/CareerTimeline/CareerTimeline.tsx` line 14 filters
`quest.type !== 'hobby'`. Independent quests (11 and 12) do appear.
Decide whether the reel belongs on the timeline. Two of the candidates
are ongoing and would sit alongside the current role, which may be the
point or may be clutter.

### 3. `externalLink` is declared and never used

`externalLink?: string` is on the `Quest` interface at
`quests.data.tsx` line 19. Nothing sets it. No component reads it. A
repo link therefore has no path to the page.

For a project reel this matters more than for job history: the repo is
the evidence. Either wire `externalLink` through `QuestCard` and
`QuestDetail`, or drop the field.

## Evidence extraction

Run per repository. The point is to recover what was actually built and
when, not to produce statistics for display.

```bash
# Shape and span of the work
git log --reverse --format='%ad %s' --date=short | head -1
git log -1 --format='%ad %s' --date=short
git rev-list --count HEAD

# Where the effort actually went
git log --format='%ad' --date=format:'%Y-%m' | sort | uniq -c

# Which parts of the system were touched most
git log --name-only --format='' | sort | uniq -c | sort -rn | head -40

# The narrative: substantial commits, not typo fixes
git log --format='%ad  %s' --date=short --no-merges

# Size of the thing
git ls-files | wc -l
cloc . --exclude-dir=node_modules,Library,obj,bin 2>/dev/null | tail -20
```

Read the commit subjects for turning points: the commit where a system
was replaced, where a constraint forced a redesign, where something was
deleted. Those are the accomplishment lines. Commit counts are not.

## Editorial contract for the reel

Each accomplishment line must name at least one of: the artifact built,
the constraint it was built against, or the decision that was made and
what it cost.

Rules:

- Anchor in the repo. Every claim should be checkable by someone who
  clones it.
- Kill the "learnings" boilerplate. The existing entries pad every
  accomplishment with "Learned that..." and "Discovered that..." lines
  that restate the description as an aphorism. The `learnings` field
  should hold a specific non-obvious thing or be empty.
- No tool-name lists. "Used ChatGPT, Claude, Cursor" says nothing.
  What was built with them, and what did that reveal, says something.
- Past tense, concrete nouns, no hedging.
- No em dashes. No section symbol. See the repo root `CLAUDE.md`.

## Candidate reel

Zo to confirm and extend. Ordered by strength of evidence, not by
personal attachment:

| Project | Why it belongs | Repo status |
| --- | --- | --- |
| Gatekeeper Bastion | Unity 6 / C#. Has a design method, a milestone contract, and a verification discipline. Currently compressed into "taught myself Unity" | Not connected to this session |
| Serennovas | React + TS UI and a .NET Azure Functions API. Patent and BLAST sequence search domain. Absent from the resume entirely | Not connected |
| Zo Garden eCafe | This monorepo. Quartz 4 garden, the two-part AI governance explainer, the resume SPA itself, Cloudflare Pages build | Connected. History readable now |

## Sequence

1. Settle the three structural gaps. Gap 1 first: it decides whether
   the reel is worth writing at all.
2. Extract evidence per repo using the commands above.
3. Draft entries against the editorial contract.
4. Wire `externalLink` if gap 3 lands that way.
5. Fix the `Expplored` typo while in the file.

## Open questions for Zo

- Does the printed resume get a projects section, or does the reel live
  only in the interactive views?
- How many projects in the reel? Three strong entries beat six thin
  ones, and thin entries are the current problem.
- Do the two ongoing side projects belong on the career timeline
  alongside the Progyny role?
