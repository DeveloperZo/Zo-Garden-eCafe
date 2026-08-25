# AI governance series

A two-part explainer living in the garden.

## Canonical locations

| Path | What |
| --- | --- |
| `garden/content/ai-governance/index.md` | Quartz hub page for the series |
| `garden/content/ai-governance/part-1/` | Part 1: "Can AI Self-Govern?" 8-section systems analysis |
| `garden/content/ai-governance/part-2/` | Part 2: "What Can I Do About AI?" full 12 leverage-point action guide |
| `garden/content/ai-governance/leverage-points.md` | 12 LP quick reference as Quartz markdown |

Legacy single-file HTML copies exist at the repo root
(`ai-systems-explainer.html`, `what-can-i-do.html`). They are superseded
by the split markdown sections and can be removed.

## Part 1 section structure

1. What's Being Built. Training pipeline, compute scaling
2. Why It's Moving So Fast. Capital ring, circular financing
3. What's Unsolved at That Speed. Alignment gap, RLHF limits
4. Who Was Supposed to Slow It. Oversight resources vs. scale
5. How These Interact as a System. R1 / B / R2 loops, flow pressure
6. Working From Inside. Meadows participation stance, loop speed mismatch
7. What's Actually at Stake. Critique cards, labor displacement, safety risk
8. Where You Have Leverage. Teaser only: 4-tier overview plus Part 2 link

Section 6 is not called "The Dance" and does not present two paths. That
false dichotomy was removed. Section 7 does not use the phrase
"extinction risk".

## Design system

CSS variables `--red` / `--green` / `--blue` / `--amber` / `--gray`, each
with a `-lt` light variant.

Tier colors: gray = low, blue = mid, amber = high, red = transform.

Six figure labels: Fig 1-1 through Fig 5-1, plus Fig 2-2.

Section 7 uses a two-column critique-grid layout. Part 2 is standalone
with its own CSS.

## Editorial rules (HARD)

- No false dichotomies. Do not frame AI as having unique properties that
  other complex systems do not share. Meadows' fisheries and
  irreversibility examples apply to all complex systems.
- Ground stakes specifically: mechanism, timeline, distribution. No
  ambient dread. Section 7's safety-risk framing names the mechanism
  (optimization toward miscalibrated objectives), the timeline
  (contested, 2030s to 2040s and later), and the distribution (proximate
  actors are labs and policymakers, not the general public).
- Section 8 stays a teaser. Full leverage-point detail lives only in
  Part 2.
- Curved paths for feedback loops (quadratic bezier). Straight lines for
  direct causal inputs.
