# Resume SPA: quest data and what reaches the printed resume

The React resume at `resumeContent/` renders one dataset,
`src/data/quests.data.tsx`, through four views. Which view shows which
quest is decided by `Quest.type`, and those rules are not obvious from
any single file.

## What each view filters on

| View | File | Shows |
| --- | --- | --- |
| Printed resume and PDF | `components/ResumeView/ResumeView.tsx` | `career` and `independent` under Professional Experience, `hobby` under Projects, `education` under Education |
| Career timeline | `components/CareerTimeline/CareerTimeline.tsx` | Everything, side projects inline with roles |
| Accomplishments | `components/Accomplishments/Accomplishments.tsx` | Everything, bucketed by type into four filter sections |
| Quest detail | `components/QuestDetail/QuestDetail.tsx` | Any quest by id |

The PDF is a DOM capture of `.resume-container` (`utils/pdfGenerator.ts`),
so anything added to ResumeView reaches the PDF with no further work.
Nothing else does.

## Decisions taken 2026-08-25

**Side projects are one combined quest, not one per project.** Quest 8
covers both Gatekeeper Bastion and this monorepo. Quests 8 and 9 used to
be a Unity entry and an AI-tools entry; both were replaced. Quest id 9 is
now unused and the gap is deliberate, so existing links to quests 10, 11
and 12 keep working.

**Serennovas is quest 12, not a side project.** It is a paid independent
engagement, so it stays typed `independent` and appears under Professional
Experience. Its date range was corrected from a Jul 2024 end to ongoing
after the repos showed work through Aug 2026. Do not move it into the
projects reel.

**Quest 8 starts May 2026 because that is where the evidence starts.**
The old Unity entry claimed Jun 2012 and nothing supported it. The date
is anchored to the first commit of the earliest project in the entry. If
more projects join the entry, the start date moves to match.

**`externalLink` is wired and used.** It renders as a Repository row in
QuestDetail and as a link under the project name in ResumeView. Only
`github.com/DeveloperZo/Zo-Garden-eCafe` is public; the Gatekeeper Bastion
GitHub repo returns 404 unauthenticated and Serennovas is a private Azure
DevOps repo, so neither can be linked.

## Editorial contract for quest content

Accomplishment lines name at least one of: the artifact built, the
constraint it was built against, or the decision made and what it cost.
Claims are pulled from commit history and repo state so a reader can check
them. `learnings` holds one specific non-obvious thing per accomplishment,
or nothing. QuestDetail hides the Skills section when a quest has no
learnings, so empty is safe.

Every quest except 10 (education) now follows it. The
"Learned that... / Discovered that..." boilerplate is gone from the file.

Quest 1 is written at director altitude on purpose: bullets lead with the
decision and name who else it bound, not with the artifact. The title
stays Engineering Manager, which is the actual title.

## The description field is a scope line, not a tagline

`description` renders under the job header in ResumeView, where the role
title, company and dates are already on screen, and as the card blurb on
the timeline. It must add what the header cannot: what was built and at
what size. It must not restate the role or name the company.

Wrong: "Engineering manager on the greenfield rebuild of Progyny's
fertility and family-building benefits platform". The first four words
and the company name are already directly above it.

Right: "Greenfield rebuild of a fertility and family-building benefits
platform covering roughly 6.5M lives."

Noun phrases work best, run 13 to 21 words, and have the side benefit of
never triggering the retro rewrite described under Traps. Check a new one
by intersecting its words against the role title and company: the overlap
should be empty.

## Length band

Accomplishment descriptions run roughly 15 to 41 words. Bullet counts
scale with tenure and recency, from 3 on the oldest roles to 8 on the
current one. Do not tighten the spread: uniform length is one of the
things that made an earlier version read as machine-written.

## Voice

**Zo's voice, taken from the entries themselves, not from a style
imposed on them.** Read the existing entries before writing new ones.

Learnings are one line. They open with a verb of acquisition ("Learned
that", "Learned how to", "Learned to", "Discovered", "Found"), carry no
terminal period, and do not run to a second sentence. Plain business
vocabulary. Occasionally blunt about a gap: "Learned to be proficient in
architecting for a language I was not well-versed in." Occasionally
emphatic: "Learned to make decisions WITH constraints instead of against
constraints."

Accomplishment descriptions are one sentence, past tense, verb first.
Two sentences only when the second carries a fact the first cannot hold.

What this is not: narrative. No scene-setting, no "I went in expecting X
and found Y", no anecdote structure. Two earlier passes on this file got
that wrong in opposite directions, first with compressed epigrams and
then with conversational storytelling. Both were a register imposed from
outside. The entries already had one.

Three habits that produced the epigram problem and should stay gone:

- **The aphorism.** "A phased plan is a credibility instrument." Twenty
  consecutive of those is what manufactured prose looks like.
- **The trailing judgment clause.** "which meant X", "so that Y". Reads
  well once per entry, mechanical by the third.
- **The colon followed by a rhythmic list of three or four.** At most one
  across all summaries.

Summaries must not restate their own bullets. The summary renders
directly above the accomplishments list, so overlap is visible.

## The side-projects entry stays general

Quest 8 deliberately names no project, no repository, no line count and
no milestone count. Zo's call, 2026-08-26: the specifics do not matter to
a reader, the process and what it taught do. Technologies stay because
they are skills. Do not "improve" this entry by restoring the evidence,
and note that the underlying repositories are private anyway, so nobody
outside could check them.

## Independent consulting entries

Quests 11 and 12 are both independent engagements and both carry the same
`workTitle`, "Technical Consultant". They are told apart by `company`,
which names the function actually performed: "Independent Consulting,
Enterprise Architect" for the hedge fund assessment and "Independent
Consulting, Director" for the Serennovas engagement. The client's sector
lives in `titles.sleek`.

Two distinct `company` strings is deliberate. In Accomplishments the two
engagements share one role button and split into two company buttons,
which is the correct reading: the same role performed twice, for
different clients. Do not collapse them back to a single company string.

## Traps

Quests without a `company` are bucketed as career, not by their real
type. Accomplishments synthesizes "Personal Project" as the company for
those quests, then looks the type up by company string and finds nothing.
Quest 8 states `company: 'Personal Project'` for exactly this reason.

Role strings are the join key in Accomplishments. A role reused across two
quests of different types gets bucketed by whichever quest appears first
in the array. Give each quest distinct role names unless the shared
bucket is what you want.

`getRetroDescription` in CareerTimeline rewrites descriptions for the
retro theme and mangles any that begin with Led, Transformed, Co-led,
Enhanced, Developed or Rotated. Descriptions starting with anything else
pass through untouched. Write new descriptions accordingly.
