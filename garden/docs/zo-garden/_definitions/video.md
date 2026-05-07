---
title: Video artifact definition
tags:
  - meta
  - definitions
draft: false
---
<!--
Purpose: Authoring contract for VID-### video script artifacts — both short-form and long-form.
Status: canonical
Owner: zo
Update trigger: when script format, required sections, or platform targets change
Last updated: 2026-05-06
-->

# Video

Use this definition for `VID-###-descriptor.md` artifacts under `content/<topic>/video/`.

Video content is hosted externally (YouTube, YouTube Shorts, TikTok, Instagram Reels). The script artifact in the garden is the canonical source for what was said, when, and why — not a transcript after the fact, but the authored intent before recording.

## File naming

`VID-###-descriptor.md`. Pick the next free number globally across all video scripts; never reuse a retired number. Use the `format` frontmatter field to distinguish short from long — do not encode it in the filename.

## Frontmatter fields

```yaml
---
title: <human-readable title>
tags:
  - video
  - <topic>
format: short | long
platform: youtube-shorts | tiktok | reels | youtube | multi
source: <link to the primary garden content this draws from>
duration_target: <e.g. "90 sec" or "17 min">
draft: false
---
```

## Required sections — all videos

### Concept
One paragraph. What is this video about? What should a viewer take away? What is the one idea it lands on? This is the brief — it drives every word in the script.

### Platform and format
Where will this be hosted? Which format (`short` or `long`)? Any aspect-ratio, caption, or platform-specific constraints.

### Source material
Wikilinks to the garden content this video draws from. The script should not introduce new claims not grounded in the source material.

### Script
Full spoken word with time codes and production annotations. Use this block structure throughout:

```
[MM:SS–MM:SS | SECTION LABEL]
[B-ROLL: brief description of visual or footage]
[ON SCREEN: text, stat, or graphic that appears]
SPEAKER: The words spoken aloud.
```

- Time codes are targets, not rigid locks. Adjust after a read-through.
- Mark every place a diagram, graphic, or on-screen stat appears with `[ON SCREEN: ...]`.
- B-roll notes describe the visual intention — what the viewer is seeing while audio plays. These are production guidance, not script.
- Speaker text is the actual words — write it to be spoken, not read.

---

## Additional required sections — long-form only

### Chapters
A table of chapters with target timestamps and links to source docs:

| Timestamp | Chapter title | Source doc |
|---|---|---|
| 00:00 | … | … |

### Production notes
- **Thumbnail concept** — what the thumbnail should convey; a rough visual description.
- **Description (YouTube)** — the video description copy including timestamps and links.
- **Tags** — suggested YouTube tags for discoverability.
- **Recording notes** — any setup, pacing, or delivery guidance specific to this video.

---

## Additional required sections — short-form only

### Hook (first 5–10 seconds)
Write the hook separately before the full script. It should be capable of stopping a scroll. One striking question, contradiction, or number. The rest of the video is the payoff.

### CTA
What the viewer should do or where to go. Must be specific: a URL, a next piece to read, a next video. "Follow for more" is not a CTA.

---

## Script writing conventions

- **Write to be spoken.** Contractions are correct. Short sentences are correct. Literary rhythm is correct.
- **One idea per video** (short-form). Long-form may have chapters but each chapter should still resolve to a single clean takeaway.
- **No jargon without a sentence of grounding.** Every technical term gets a one-sentence plain-language anchor the first time it appears.
- **Ground every claim in source material.** If the claim isn't in the source doc, it doesn't go in the script without explicit annotation.
- **Avoid hedging stacks.** "It's possible that it could arguably be the case that…" is a transcript disease. Commit to the claim or cut it.
- **Mark what needs a graphic.** Any stat, comparison, or structural relationship that is easier to show than say should have an `[ON SCREEN: ...]` cue. This is a production signal, not optional.

---

## Where video artifacts live

Scripts live alongside the content they draw from:

```
content/
  <topic>/
    <part>/
      video/
        VID-###-descriptor.md
```

This keeps the script navigable from the source material and makes it obvious when source content changes whether the script needs updating.
