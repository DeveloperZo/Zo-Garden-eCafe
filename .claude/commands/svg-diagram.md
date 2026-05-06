# svg-diagram

Create or update an inline SVG diagram for the Zo Garden Quartz site.

## Critical rule: no blank lines inside the SVG block

CommonMark (used by Quartz/remark) terminates type-6/7 HTML blocks at the **first blank line**. A blank line inside `<svg>...</svg>` causes everything after it to be parsed as plain text — the SVG appears broken with floating text fragments.

**Every SVG block must have zero blank lines between the opening `<svg>` tag and the closing `</svg>` tag.** Strip all blank lines between elements. Comments are fine on their own lines, but there must be no empty lines.

```markdown
<!-- WRONG — blank line after </defs> terminates the HTML block -->
<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
  <defs>...</defs>

  <rect .../>
</svg>

<!-- CORRECT — no blank lines anywhere inside -->
<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
  <defs>...</defs>
  <rect .../>
</svg>
```

Multi-line attribute lists spanning two lines are fine as long as no blank line separates them from surrounding elements.

## CSS selectors (custom.scss)

Quartz renders inline SVG HTML blocks as **direct children of `<article>`**, not wrapped in `<p>`. Use:

```scss
article > svg,        // inline SVG blocks (primary)
article p > svg {     // SVG inside a paragraph (fallback)
  display: block;
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 1px solid var(--z-border);
  border-radius: 12px;
  padding: 20px 16px 12px;
  margin: 24px 0 6px;
  box-shadow: 0 2px 8px var(--z-shadow);
  overflow: visible;
}

// Caption italic immediately after an SVG
article > svg + p > em:only-child,
article p:has(> svg) + p > em:only-child {
  display: block;
  font-size: 0.8rem;
  color: var(--z-muted);
  margin-top: 0;
  margin-bottom: 20px;
  line-height: 1.55;
}
```

Heading anchor icons (`h1 > a > svg`) are not direct children of `article`, so `article > svg` never catches them.

## Design tokens

All diagrams use this shared palette (defined in custom.scss `:root`):

| Token | Hex | Use |
|---|---|---|
| `--z-red` | `#C94B2E` | AI Labs, reinforcing loops, warnings |
| `--z-red-lt` | `#FDE8E3` | Red node fill |
| `--z-green` | `#2A7A5F` | Users/revenue, balancing loops |
| `--z-green-lt` | `#EDF7F3` | Green node fill |
| `--z-blue` | `#3A5498` | Chip makers, hyperscalers |
| `--z-blue-lt` | `#E3E8F5` | Blue node fill |
| `--z-amber` | `#C9880A` | Investors, R2 loop |
| `--z-amber-lt` | `#FEF8E8` | Amber node fill |
| `--z-gray` | `#9B9BA8` | Neutral elements, legends |
| `--z-muted` | `#6B6B85` | Labels, secondary text |
| `--z-border` | `#E4E2DC` | Borders, axes |

Use raw hex values inside SVG (CSS variables don't work in SVG attributes).

## Node style convention

Box nodes: `rx="10"`, `stroke-width="2"`, fill from palette `*-lt`, stroke from palette main color.

Arrow markers: defined once in `<defs>`, named by color (`id="p-r"` for red, `id="p-b"` for blue, etc.). Arrow path: `stroke-width="2.5"`, `fill="none"`, `marker-end="url(#p-r)"`.

Arrow label pills: `<rect rx="4" fill="[*-lt]" opacity="0.82"/>` followed by `<text font-size="10.5" font-weight="600" fill="[main color]">`.

## Caption convention

Place a *DIA-NNN — description* italic paragraph immediately after the closing `</svg>` tag:

```markdown
</svg>

*DIA-002 — Caption text here.*
```

The `article > svg + p > em:only-child` CSS rule styles it as a small muted caption.

## Diagram files

Canonical SVG files live in `garden/content/ai-governance/part-1/diagrams/`. When a page references a diagram via `![](/ai-governance/part-1/diagrams/DIA-NNN-name.svg)`, Quartz resolves the path and renders it as an `<img>`. For inline rendering with the card CSS treatment, embed the SVG directly in the markdown with no blank lines.
