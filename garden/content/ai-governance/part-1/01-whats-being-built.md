---
title: "What's Being Built"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 1 of 8*

*Before asking whether AI can self-govern, understand what it is: systems where raw capability scales reliably with compute, and where access to that compute is narrowing.*

A modern AI model (the thing behind ChatGPT, Claude, or Gemini) is fundamentally **a very large file of numbers**. Those numbers, called *weights*, encode patterns learned by reading an enormous amount of text. A large model might have 100 billion of them. That file is the model.

Training is how those numbers get produced. The process is almost comically simple: show the model a sentence, ask it to predict the next word, tell it how wrong it was, and adjust the numbers a tiny bit. Do that billions of times across trillions of words, and something unexpected happens. The model generalizes in ways nobody explicitly taught it — it reasons, writes code, translates. Pattern-matching at sufficient scale produces capabilities that weren't designed in.

![The training pipeline: tokens in, weights out.](/ai-governance/part-1/diagrams/DIA-001-training-pipeline.svg)

Each training run costs \$100M to \$1B+[^1] in compute. Each new generation is often trained with its predecessor as a collaborator, so capability compounds across generations. Labs must recoup that cost by selling API access and products, which creates pressure to deploy quickly. Once a lab releases a model's weights publicly ("open weights"), there is no recall. No patch, no withdrawal, no undo. Once in the world, open weights can be run by anyone, anywhere, permanently outside any regulatory perimeter.

**Compute, raw processing power from specialized chips, sits at the center of this economy.** More compute plus more data reliably produces more capable models. That relationship has held for over a decade: training compute has grown at roughly 4.4x per year since 2010.[^2] Whoever controls the most compute can train the most capable models. The race for AI capability is, at bottom, a race for a physical resource.

> [!key]- Key concept: stocks and flows
> Picture a bathtub. Water builds up in it over time. That buildup is a *stock* (also called a reservoir or accumulation). The faucet and drain are *flows* — what fills or empties it. Model weights are a stock. Training is the flow that fills them. Compute, electricity, and engineers are flows that determine how fast the stock builds.

> [!note]- What does "more compute" actually mean in practice?
> Training a frontier model requires running thousands of specialized chips (Nvidia H100s or equivalent) in parallel for weeks. Each chip costs \$25,000 to \$40,000[^3] to buy. A single frontier training run might use 10,000 to 30,000 simultaneously,[^4] which is \$250M to \$1.2B in hardware before electricity, engineers, or data. The rule of thumb that larger models are more capable (the "scaling hypothesis") has held for over a decade, which is why spending keeps increasing. The dollar cost of training a frontier model doubled roughly every eight months between 2015 and 2024, per Epoch AI's tracking of large-scale training runs[^5] — a slower rate than raw compute growth because chip efficiency improves in parallel.

Part 2 turns to pace: why this is moving so fast.

---
