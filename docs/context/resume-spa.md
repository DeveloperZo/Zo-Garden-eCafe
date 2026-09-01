# Resume SPA: quest data and what reaches the printed resume

The React resume at `resumeContent/` renders one dataset,
`src/data/quests.data.tsx`, through four views. Which view shows which
quest is decided by `Quest.type`, and those rules are not obvious from
any single file. The professional summary and the four core
competencies live in `src/data/profile.data.ts`. ResumeView and
CareerTimeline both read that file, so a change in one place reaches
the printed resume and the timeline.

## What each view filters on

| View | File | Shows |
| --- | --- | --- |
| Printed resume and PDF | `components/ResumeView/ResumeView.tsx` | `career` under Professional Experience, `independent` under Principal Technologist (above Projects), `hobby` under Projects, `education` under Education |
| Career timeline | `components/CareerTimeline/CareerTimeline.tsx` | Everything, side projects inline with roles |
| Accomplishments | `components/Accomplishments/Accomplishments.tsx` | Everything, bucketed by type into four filter sections |
| Quest detail | `components/QuestDetail/QuestDetail.tsx` | Any quest by id |

The PDF is a DOM capture of `.resume-container` (`utils/pdfGenerator.ts`),
so anything added to ResumeView reaches the PDF with no further work.
Nothing else does.

## Decisions taken 2026-08-25

**Side projects are one combined quest, not one per project.** Quest 8
covers InfinityQube and Gatekeeper Bastion. Quests 8 and 9 used to be a
Unity entry and an AI-tools entry; both were replaced. Quest id 9 is
now unused and the gap is deliberate, so existing links to quests 10, 11
and 12 keep working. Zo Garden is the host of this resume, not a
printed project.

**Serennovas is quest 12, not a side project.** It is a paid independent
engagement, typed `independent`. On the printed resume it lives in
Principal Technologist, above Projects, not under Professional
Experience. Its date range was corrected from a Jul 2024 end to ongoing
after the repos showed work through Aug 2026. Do not move it into the
projects reel.

**Quest 8 starts April 2025 because that is where the evidence starts.**
The first commit of InfinityQube is 2025-04-29. The old Unity entry
claimed Jun 2012 and nothing supported it. The date is anchored to the
first commit of the earliest project in the entry. If more projects
join the entry, the start date moves to match.

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
decision and name who else it bound, not with the artifact. The printed
title is Manager, Experience Platform, which is the actual title. Do not
put Director or VP on the resume. Do not describe this role as the
CareConnect program, product, or platform lead. Internal names
(CareConnect, Business Services, Mothra, Aidbox, cc_toolkit, nSpec) stay off the printed
entry.

**Quest 1 is five bullets, 3 Director / 2 Senior Manager (2026-08-31).**
Aligned to the evidence register the same day. Director spine first:
managing platform services and named-domain API contracts
(eligibility, benefits, member profiles, claims, patient-reported
outcomes), the delivery and operations path including the shared Datadog
view, and a shared delivery workbench for release evidence. Senior
Manager spine: a VS Code extension and CLI that gates AI-generated
changes, then mentoring developers on using AI-assisted work to
enhance the SDLC. Internal tool names (cc_toolkit, nSpec) stay off
the printed entry. The same rule as CareConnect and Mothra: translate
to the concept an outside reader already has. The platform scale is 6.5M lives. Direct reports are a team of 5.
Both stay on the overview and the first bullet. Dropped claims the
register does not support: leading the program, 7 teams and two-quarter
commitments, and HIPAA vendor selection. Do not claim
marketplace adoption or workbench user counts. The QuestDetail summary
no longer enumerates the bullets.

**Quest 2 uses the same printed bar (2026-08-31).** No verdict
sentences. No method inventories (pair programming, coaching sessions).
The overview already names five teams and one full stack load, so the
first bullet does not restate that split. Mentoring is the architecture
and the delivery against it, not a promise that they would carry it
after he left.

**Quest 3 uses the same printed bar (2026-08-31).** Four years, so
seven lines stay. The stack inventory is gone: architecture
responsibility across stacks, including unfamiliar ones, not a list of
six frameworks. FreedomPay is a payment-processor certification. The
estimate-and-architecture aphorism is gone. Scaffolding starts
engagements from a shared baseline; it does not editorialize about
copying the last project.

## The description field is a role overview

`description` renders under the job header in ResumeView and as the card
blurb on the timeline. It is the line that says what the person was
responsible for in that role.

**Verb first, telegraphic, about 11 words.** Drop articles. Drop
qualifiers. Name the scope and the number and stop.

    Managed a team of 5 on a rebuild covering 6.5M lives
    Refactored entire lending platform prior to leading engineering through executive transition

Two failures to avoid, both of which this file has had. A noun phrase
reads as a caption, not a job entry: "Greenfield rebuild of a fertility
and family-building benefits platform covering roughly 6.5M lives." A
full grammatical sentence with every article and qualifier intact is
merely wordy: "Led the platform services team through a ground-up rebuild
of a fertility and family-building benefits platform serving roughly 6.5M
members."

Note this register is specific to `description`. Accomplishment bullets
keep their articles, where "a team of 5" reads better than "team of 5".

Do not restate the title and company as a label, which is a different
failure and the one that produced the caption style in the first place.
"Platform manager on the greenfield rebuild of Progyny's..." repeats
both lines directly above it. A verb that happens to echo the title is
fine when it is doing work in a sentence: "Managed platform
services" under a Manager, Experience Platform heading reads normally.

## Length band

Accomplishment descriptions run roughly 15 to 41 words. Bullet counts
scale with tenure and recency, from 3 on the oldest roles up to 8 on a
current one. Quest 1 is 5 on purpose. Do not tighten the spread: uniform
length is one of the things that made an earlier version read as
machine-written.

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

Use an indefinite article on first mention. "Built and led a team of 5",
not "the team of 5". "Built a shared UI component library", not "the
shared UI component library". A reader meeting something for the first
time has no referent for "the". Use "the" only when a possessive, a
relative clause or an earlier bullet has already fixed what is meant, as
in "the client's software suite" or "the publishing pipeline Zo Garden
is served from".

No internal vocabulary. Terms from a project's own method, "kill
criteria" being the one that got through, mean nothing to a reader and
read as jargon. Say the plain version: "cancelled the ones that stopped
being worth building".

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

Quest 8 is one combined entry for InfinityQube (Apr 2025–Feb 2026) and
the Unity FPS (Gatekeeper Bastion and its Protocol predecessor). The
printed resume (2026-08-31, fifth pass) carries scale and AI leverage
in plain language: nearly 500 commits (315 + 177), over 600 C# files
(336 + 306), architecture specified and enforced in the build, and
the implementation generated rather than typed. Do not name either
game. Do not print collision matrices, assemblies, serialization,
harnesses, or complexity scores. Do not use raw git insertion totals
(Bastion's millions are asset churn). Git authors are almost all
ArchitectZo, so do not invent an authorship percentage; the unwritten-
code claim is the method, not a measured split. Do not print Zo Garden
or link the public GitHub. Start date is April 2025, first InfinityQube
commit. No `externalLink` on this quest.

Left off the printed card on purpose: Zo Garden (this resume's host),
the n7/Discord family-assistant stack (personal), Plumbing (thin
website prototype), PortfolioSite and RoderickSite (old GitHub Pages),
The Bonds (fiction), and Serennovas (quest 12, paid consulting).

## Independent consulting entries

Quests 11 and 12 are both independent engagements. The printed title
is Principal Technologist (Zo, 2026-08-31; spelled Principal, not
Principle). They are told apart by `company`: "Independent Consulting,
Enterprise Architect" for the hedge fund assessment and "Independent
Consulting, Principal Technologist" for the Serennovas engagement. The
client's sector lives in `titles.sleek`.

On the printed resume they are not Professional Experience. Quest 12
renders under a Principal Technologist section above Projects. Quest 11
(hedge fund) stays in the dataset for Timeline and Accomplishments but
is excluded from the printed resume (2026-08-31). The heading on the
consulting card is the function after the comma.

Quest 12 is full stack plus founder advising, not data or corpus work
(Zo, 2026-08-31). The overview says that once: built the product full
stack and advised founders on technical direction. Printed lines then
enumerate work a reader can follow: the identity-provider stop as
advice that landed, search/family/documents end to end, sign-in and
server-side plan limits, and saved searches plus the trial and paid-
plan demo screens. Do not repeat "full stack" in every bullet.
Do not claim corpus load counts, weekly ingestion, production
hardening, or a launch. Do not name Serennovas, BLAST, or Stripe. Do
not explain the product. Do not attach Phase 1, 4, or 6 board items
to this entry.

Two distinct `company` strings is deliberate. In Accomplishments the two
engagements share one role button (Principal Technologist) and split
into two company buttons. Do not collapse them back to a single
company string.

## Traps

Quests without a `company` are bucketed as career, not by their real
type. Accomplishments synthesizes "Personal Project" as the company for
those quests, then looks the type up by company string and finds nothing.
Quest 8 states `company: 'Personal Project'` for exactly this reason.

Role strings are the join key in Accomplishments. A role reused across two
quests of different types gets bucketed by whichever quest appears first
in the array. Give each quest distinct role names unless the shared
bucket is what you want.

`getRetroDescription` and `getSleekDescription` used to rewrite
descriptions per theme and were removed on 2026-08-26. The retro one
prepended a role-flavored prefix ending in "to " and expected a bare verb
phrase after it, which mangled any description beginning with Led,
Transformed, Co-led, Enhanced, Developed or Rotated, and could never work
against a full sentence. Descriptions now render as authored in both
themes. Retro character comes from the quest titles, the pixel icons and
the labels. Do not reintroduce a per-theme rewrite of authored prose.
