---
name: diagramming
description: Author clean, publication-quality SVG diagrams — flow charts, pentagon capital-ring loops, capability-gap line charts, bar/comparison charts, and two-column comparison panels. Use this skill whenever a diagram, chart, or data visualization needs to be created or edited as an SVG file, including when normalizing visual consistency across a set of existing diagrams.
---

# Diagramming

Guidelines distilled from iterative production of diagrams for the AI-governance series. Rules here are **defaults, not laws** — always choose the simplest geometry that maximises clarity.

---

## 1 · Design System

### Color palette

| Role | Fill | Stroke / Text |
|---|---|---|
| Primary / warning | `#FDE8E3` | `#C94B2E` |
| Blue / system | `#E3E8F5` | `#3A5498` |
| Green / positive | `#EDF7F3` | `#2A7A5F` |
| Amber / investor | `#FEF8E8` | `#C9880A` |
| Neutral body | `#F7F6F3` | `#6B6B85` |
| Axis / decorative | `#E4E2DC` | `#9B9BA8` |
| Page background | transparent / `#FAFAF8` | — |

### Typography

| Use | `font-size` | `font-weight` | `fill` |
|---|---|---|---|
| Node primary label | 13 | 700 | node stroke color |
| Node sub-label | 11 | 400 | node stroke color |
| Step / axis label | 11 | 600 | `#6B6B85` |
| Arrow pill text | 10.5 | 600 | `#C94B2E` |
| Body annotation | 10–11 | 400–600 | `#6B6B85` |
| Legend | 10–10.5 | 400 | `#6B6B85` |

---

## 2 · Node Rules

- **Uniform sizing**: all nodes in a diagram share the same `width` × `height` (e.g., 180 × 60).
- **Two text lines max**: primary label (`font-size="13" font-weight="700"`) + optional sub-label (`font-size="11"`). Center both with `text-anchor="middle"`.
- **No decorative icons inside node boxes.** Icons add visual noise without information value. Use color and text only.
- `rx="10"` for rounded corners; `stroke-width="2"` for node borders.
- Nodes are drawn **last** (after arrows) so they sit on top of arcs.

---

## 3 · Pentagon Geometry (capital-ring / loop diagrams)

Center `C = (cx, cy)`, radius `R`. Five vertices at 72° intervals, starting from the top:

```
V[i].x = cx + R · sin(i · 72° · π/180)
V[i].y = cy − R · cos(i · 72° · π/180)

i=0 top:          (cx,       cy−R)
i=1 upper-right:  (cx+0.951R, cy−0.309R)
i=2 lower-right:  (cx+0.588R, cy+0.809R)
i=3 lower-left:   (cx−0.588R, cy+0.809R)
i=4 upper-left:   (cx−0.951R, cy−0.309R)
```

Node box top-left: `(Vx − w/2, Vy − h/2)` where `w=180, h=60`.

### Arrow control points

For a clockwise arc from exit point `P0` to entry point `P1`:

```
M  = midpoint(P0, P1)
CP = M + 80px · unit-vector-away-from-C(M)
```

This formula guarantees consistent curvature across all five arcs. Arrows 1↔5 and 2↔4 are exact mirrors about the vertical axis of symmetry.

### Chord-length trap

A short chord (< ~50 px) combined with a fixed 80 px sag produces an extreme, ugly arc. **Fix**: route the arrow along a different edge pair to obtain a wider chord. Example: instead of right-edge-of-V2 → left-edge-of-V3 (26 px chord), use bottom-edge-of-V2 → bottom-edge-of-V3 (206 px chord).

---

## 4 · Arrow Rules

- `stroke-width="2.5"` for primary flow arrows; `stroke-width="1.5"` for secondary/dashed.
- Arrowhead markers: define once in `<defs>`, reuse by ID. Two variants: solid (`opacity="1"`) and ghost (`opacity="0.55"`).
- **Quadratic Bézier** `Q cx,cy ex,ey` for all curved arcs.
- **Use straight lines (`<line>`) for cross-connections and shortcuts when node geometry permits.** Do not force curves where a straight line is cleaner. Example: a direct equity shortcut between two nodes at the same y-coordinate → horizontal `<line>`, not a `Q` arc.
- Label placement: Bézier midpoint at `t=0.5` → `B = 0.25·P0 + 0.5·CP + 0.25·P1`.

---

## 5 · Arrow Label Pills

- **No stroke on label pills** — soft fill + opacity only (competing pill borders add noise).
- Fill: `#FDE8E3` at `opacity="0.82"` for red-system labels; match fill color family to arrow color otherwise.
- `rx="4"` for pill corners.
- Size the rect to fit: measure text width and add 8 px padding each side.

---

## 6 · Dashed Lines

- Cross-connection / shortcut: `stroke-dasharray="6,4"` + `opacity="0.55"` to visually recede.
- Measurement / reference: `stroke-dasharray="3,3"` in neutral gray `#9B9BA8`.

---

## 7 · Legend

Place in the lower-left or lower-right. Use `<line>` + `<text>` pairs; no bordered boxes. Keep font-size at 10–10.5.

---

## 8 · Clarity-First Principles

1. **Rules are defaults, not laws.** Every guideline above exists to serve clarity. When a rule would hurt clarity, break it consciously.
2. **Straight lines for shortcuts.** When two connected nodes share a coordinate axis (same x or same y), a `<line>` is almost always cleaner than a curve. The direct-equity connection in the capital ring diagram is the canonical example.
3. **Remove decoration that carries no information.** Icons, inner shadows, gradient fills, and decorative strokes all cost visual attention. Add them only when they encode distinct meaning.
4. **Symmetric layouts first.** For loop/cycle diagrams, compute positions mathematically from the geometry (pentagon, circle, grid) rather than by eye. This guarantees visual balance and makes mirroring trivial.
5. **Consistent curvature > perfect Bézier math.** Using the same sag formula for every arc is more important than the exact control-point coordinates; the eye detects inconsistency, not imperfection.

---

## 9 · Antipatterns

| Antipattern | Effect | Fix |
|---|---|---|
| Icons inside node boxes | Text obscured; visual noise | Remove icons; use color + text only |
| Curved arc over a short chord (< 50 px) | Extreme bump / loop | Reroute to a wider chord or use a straight line |
| Stroked pill labels | Pills compete visually with node borders | Fill-only pills, no stroke |
| Two bold lines in one node (unequal visual weight) | Nodes look different sizes | Single centered line or reduce secondary font-size |
| Arrowhead control points eyeballed | Inconsistent curvature | Use the midpoint + outward-sag formula |
| Forced curve for a straight-line shortcut | Competes with other elements, harder to read | Use `<line>` |

---

## 10 · SVG Boilerplate

```xml
<svg viewBox="0 0 W H" xmlns="http://www.w3.org/2000/svg"
     role="img" aria-labelledby="title-id desc-id">
  <title id="title-id">…</title>
  <desc id="desc-id">…</desc>
  <defs>
    <!-- arrowhead markers here -->
  </defs>
  <!-- background / axes -->
  <!-- arrows (drawn before nodes so nodes sit on top) -->
  <!-- arrow label pills -->
  <!-- nodes (drawn last) -->
  <!-- legend -->
</svg>
```

ViewBox height: leave ~30 px margin below the lowest element. For pentagon diagrams where arrow 3 bows below the bottom nodes, extend viewBox height to accommodate the arc + label (add ≈ 80 px to node bottom y).
