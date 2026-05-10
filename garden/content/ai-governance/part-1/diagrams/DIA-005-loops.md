# DIA-005: When the Loops Meet

## Snapshot
- **Diagram file:** `garden/content/ai-governance/part-1/diagrams/DIA-005-loops.svg`
- **Theme:** Multi-loop interaction around the AI capability stock
- **Primary audience takeaway:** Frontier capability is shaped by a forming reinforcing loop, an inverted balancing loop, and a weak brake — sharing one stock, none catching up.

## Loop nomenclature (internal — NOT displayed on the diagram)

These `L#` labels are working references for our conversations. The diagram renders the loops via color and arrow style only; no R/B/L badges are drawn on the canvas.

- **L1**  — AI capability → training rate. Forming reinforcing loop. Drawn as red curve from the **left-offset port on the stock's bottom edge** back to the training T-fitting. "AI begins to build AI" — capability now feeds back into its own training rate.
- **L2**  — capability gap → investment & compute → training rate. Working balancing loop. Drawn as black info-links: stock right-offset port → capability gap node → investment & compute node → training T-fitting port. The classic Meadows-style inventory adjustment loop: gap drives investment, investment drives training, training closes the gap.
- **L3**  — visible harm → investment & compute. Inverted balancing loop (paradoxical reinforcement). Drawn as deeper rust info-link sweeping from harm down across the bottom and back up to investment & compute. Section 5's claim: alarm signals raise spending instead of reducing it. The corrective inverts.
- **L4**  — visible harm → oversight & response → investment & compute. Weak balancing loop (the intended brake). Drawn as thin sage dotted info-links. The brake is real and closes the loop, but its strength is small relative to L3 and L1, so it cannot bind. Style choice: dotted/thin/low-opacity to indicate weakness — note this is a deviation from strict Meadows convention; we accept the deviation because it adds clarity without inventing new badges.

## Why L4 closes to investment & compute (not capability gap)

Real-world oversight does not change the *target* the system aims at — it raises the *cost* of getting there. Liability law, compliance burden, regulatory delay, public scrutiny all act on the funding side: making investment less attractive, slower, more expensive. That is an investment-side intervention, not a goal-setting one. So oversight & response feeds back to investment & compute.

## Color and style conventions in the SVG

- **Black info-links**: ordinary causal influence (capability gap chain — L2)
- **Rust (`#A85B49`)**: forming reinforcing loop (L1)
- **Deep rust (`#823F30`)**: inverted balancing loop, paradoxical reinforcement (L3)
- **Sage thin dotted (`#5A8270`, dasharray 2,3, opacity 0.7)**: weak balancing loop (L4)

## Structural plan (current implementation)

Main pipe (left to right): source cloud (*data · chips · talent*) → training T-fitting → AI CAPABILITY stock → deployment T-fitting → sink cloud (*products · users*).

Stock bottom info-link source ports:
- **Left-offset port (rust outline)**: emits L1
- **Right-offset port (black outline)**: emits L2's first segment

Training T-fitting bottom port: receives the closing segments of L1 and L2.

Deployment T-fitting bottom port: emits the first segment of L3 and L4 (via visible harm).

## Node naming choices

- **Clouds**: named with small italic labels (*data · chips · talent* on left, *products · users* on right). Clarifies what's outside the system boundary without cluttering the canvas.
- **Visible harm**: named with the article's term, with a small italic sub-line listing concrete modes (*bias · errors · layoffs*). This addresses the reader's "what kind of harm" question while keeping the structural label short.
- **Oversight & response**: positioned at y=360 (was y=395) for cleaner spacing relative to the harm node and L4 paths.

## How to read it

1. Start at the AI CAPABILITY stock between training (inflow) and deployment (outflow). Source cloud feeds raw inputs; sink cloud receives products/users.
2. Notice the two ports on the stock's bottom edge — separate origins for L1 and L2.
3. Trace L1 (red, curving back from left port to training T) — AI accelerating its own training.
4. Trace L2 (black) through capability gap → investment & compute → training T — the working balancing loop.
5. From deployment T, follow to visible harm.
6. From visible harm, two branches:
   - L3 (deeper rust, swept low across bottom, back to investment) — the inverted balancing loop.
   - L4 (thin sage dotted, through oversight & response, back to investment) — the intended brake, weak.

## Governance relevance

Two reinforcing loops climbing share a single stock with two corrective loops that fail in different ways: L3 inverts (alarm becomes spending), L4 is too weak to bind (regulatory pressure exists but is small relative to L1 and L3). The shifting-the-burden archetype names why structural reform pressure does not accumulate — visible safety apparatus absorbs the urgency that would otherwise reach liability law, audits, hard deployment gates.

## Suggested caption

A forming reinforcing loop, an inverted balancing loop, and a weak brake — sharing one stock.
