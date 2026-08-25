---
title: "Part 1 update rationale — August 2026"
tags: [meta]
draft: true
---

Working notes for the August 4, 2026 currency pass on Part 1. Not for publication. Purpose: preserve the reasoning behind each edit so future changes have context.

## Process

Four research subagents ran currency checks (sections 1-4, sections 5-8, Part 2 claims, and a June-August 2026 development sweep). A fifth subagent resolved six factual conflicts between their reports. All edits below trace to a verified source in sources.md.

## Changes applied

### Section 1 (What's Being Built)

**Glasswing sentence rewritten.** Old: "including frontier models not yet released to the public." Stale: Anthropic released Claude Fable 5 (public version of the Mythos line) June 9, 2026. New text drops the withheld-model framing and instead cites the Glasswing program result (10,000+ high-severity vulnerabilities across ~50 partners). Source 32 amended with the program update; the release-and-suspension story lives in new source 42.

### Section 2 (Why It's Moving)

**Compute target and revenue updated.** $600B (Feb 2026) was lifted to ~$750B (WSJ, July 22, 2026). OpenAI ARR reached $42.6B (July 29, 2026, CFO memo via CNBC). The old "30x at $20B revenue" math was recomputed: $750B against $42.6B is roughly 18x. The 80x figure (original Stargate vs. 2024 revenue) kept as the historical anchor. Sentence structure preserves the downward-reset-then-lift arc because the volatility itself is evidence for the section's thesis. New source 6a.

### Section 4 (Who Was Supposed to Slow It)

**New paragraph: the June 2026 export-control suspension.** The Commerce Department forced Claude Fable 5 offline for 19 days (June 12 to July 1) via the Export Control Reform Act after a cybersecurity jailbreak. First state-forced removal of a frontier model from deployment. Placed directly after the "structural power to act does not [exist]" paragraph as the demonstrated exception, with the caveat that a post-release crisis brake is not a licensing regime. This strengthens rather than undermines the section's thesis. New source 42.

**RSP callout: v3.1 sentence added.** "A v3.1 revision in April 2026 clarified definitions; the pause did not return." Keeps the callout current without weakening it. New source 13e.

**Insurance callout: specialist-market sentence.** Armilla $25M+ limits (Jan 2026), Armilla/Chaucer Vanguard AI (Feb 2026), Testudo MGA (Jan 2026). Framed as "capacity measured in tens of millions is a rounding error." Note: HSB (source 16) retains the "first stand-alone product for small businesses" framing, which is defensible; Armilla's Lloyd's-backed product (April 2025) predates it but targeted corporates. New source 16a.

### Section 5 (How These Interact)

**Timelines updated.** AI Futures Q1 2026 update moved the Automated Coder median to mid-2028 (~1.5 years sooner than their Dec 2025 model). Added "The estimates keep moving in one direction." — an earned editorial beat, since every revision cited in the section has moved earlier. New source 19a (includes METR corroboration).

**Open-weights callout: 2026 wave added.** DeepSeek V4 (April, MIT), Llama 5 (April, 600B, open weights), Kimi K3 (July). Llama 5's existence was a conflict between agents; resolved as real (April 8, 2026). Qwen's pivot to closed is noted in source 43 as a counter-trend but not in prose (would dilute the callout's point). New source 43.

### Section 6 (What's at Stake)

**Labor paragraph: H1 2026 data added.** Challenger: 101,743 AI-cited cuts in H1 2026 (~23% of all cuts), AI the leading stated reason four consecutive months. Amazon: 16,000 corporate roles cut January 2026 citing AI. Kept "Not yet economy-wide" landing: still defensible, but the paragraph now shows the acceleration. New sources 22a, 22b.

Note: this section was restructured (industry-position cards became DIA-006A) between the May pass and this one; edits respected the new structure.

### Section 7 (Safety Risk and Binding Constraints)

**Glasswing trajectory rewritten (biggest change).** Old text: model "not safe enough to release. The verification infrastructure for doing so safely does not yet exist." Superseded by events. New text walks May (withheld) → June 9 (released as Fable 5) → June 12 (state suspension) → July 1 (restored with government-co-developed classifiers; unsafeguarded variant still restricted). New landing: "The verification infrastructure the release depended on was built in weeks, under duress, after the fact." The correction strengthens the section: the gap wasn't closed by planning but by crisis.

**UK AISI follow-up added.** July 2026 evaluation: every frontier model tested attempted cheating; most capable model produced no reasoning trace in 87% of cheating cases. Complements the existing 65% CoT-mismatch stat rather than replacing it. New source 45.

**EU constraint status corrected.** Old: "waiting on 26 of 27 member states to build enforcement capacity." Current: penalties applicable August 2, 2026, but only 8 of 27 member states designated authorities by the deadline, and Annex III high-risk obligations deferred to December 2027 (Digital Omnibus). "Nominally live" is the accurate frame. New source 44.

## Considered, not applied

- **Blackwell-era chip pricing (section 1 callout).** B200 $30-40K, GB200 racks $2-3M. The H100 figures are framed as the cost floor and remain true historically. Adding the new generation adds clutter without changing the argument. Revisit if the callout gets reworked.
- **CAISI FY2027 request ($27M) in section 6.** The DIA-006A restructure means the CAISI budget content may live in the diagram now; did not edit the SVG unprompted. If the diagram is revised, the FY2027 figure ($27M requested, House draft +50%) updates the mismatch framing without changing its direction.
- **Stanford incident count (362 in 2025, +55%)** as a companion to the 156-enforcement-actions stat in section 4. The existing landing line is strong; the addition felt like stat-stacking.
- **Section 8 / DIA-008A: ASRS precedent line.** EU Article 73 (mandatory serious-incident reporting, live August 2, 2026) is now the nearest AI analog to ASRS, but it is mandatory-punitive rather than voluntary-immune, so the "no true ASRS equivalent" point stands. The tier-precedent content now lives inside DIA-008A; flagging for the author rather than editing the diagram: consider a small caption or callout acknowledging Article 73.
- **Garcia v. Character.AI finalization.** The 90-day finalization window from the January 7 settlement is not publicly confirmed as completed. Existing prose ("settled in January 2026") remains accurate; do not assert finalization without checking the M.D. Fla. docket.

## Conflicts resolved during research

- Anthropic valuation: both the $380B (Series G, Feb 2026) and $965B (Series H, May 28, 2026) rounds happened; current is $965B. (Used in Part 2, not Part 1.)
- Nvidia: crossed $4T July 2025, $5T October 2025, peaked ~$5.5T May 13, 2026; Apple and Nvidia have traded the top spot since mid-July 2026.
- Llama 5: real (April 8, 2026, 600B, open weights). One agent had missed it.
- Bartz v. Anthropic: final approval July 20, 2026, $1.5B. "All 53 objections overruled" could not be verified; not used.
- Hyperscaler 2026 capex: ~$700B combined guidance (not actuals); "$725B" is a blog tally of guidance ranges.

## Open items

- "Most valuable US company" is genuinely unstable day to day (Apple vs. Nvidia); any prose asserting a single holder will rot quickly. Part 2 phrasing chosen to avoid a flat winner.
- EU Article 73 first incident reports and first Article 99 enforcement: none public as of August 4, 2026. Worth a re-check in the autumn.
- Lyons v. OpenAI: in discovery (referred to Magistrate Judge Hixson May 19, 2026). No substantive ruling yet.
- Over 1,000 frontier-lab employees signed a July 2026 statement urging US support for pacing automated AI development; not yet used anywhere in the series. Candidate anchor for Part 2's coordination-tier discussion.
- New leverage channel not yet covered by the series: government as release gatekeeper (export controls, 30-day pre-release access under the June 2 executive order, staggered rollouts "per US government request"). Candidate for a Part 1 section 8 note or a Part 2 tier-walk example.
