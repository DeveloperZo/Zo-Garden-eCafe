# Project rules — Zo Garden eCafe

## Formatting rules (HARD)

### Never use the section symbol (silcrow)

Do not use the section/silcrow character anywhere in output. Not in audit reports, not in section references, not in summaries, not in bullets, not anywhere.

When referring to sections, write them out:
- "Section 1" or "section 1"
- "in section 3"
- "the opening of section 7"

This applies to all output: chat responses, file edits, audit reports, summaries. The information-presentation skill's example output uses the symbol; ignore that and use the words "Section N" or "section N" instead.

### No em dashes

Per the information-presentation skill voice rules: do not use em dashes in generated content. Use periods, colons, parentheses, or commas instead.

## Diagram conventions (HARD)

### Diagram captions live inside the SVG, not in the markdown

Diagrams in this project carry their DIA-NNN label and caption inside the SVG file itself (as a text element rendered at the bottom of the artwork). Do NOT add a separate caption line in the markdown after the image embed.

When auditing a section, do not flag a "missing DIA-NNN caption" just because the markdown only has `![](...path.svg)` with nothing after it. Instead, if caption verification is required, open the SVG and check that the label is rendered inside.
