---
title: "What's Being Built"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 1 of 8*

*Before asking whether AI can self-govern, understand what it is: systems where raw capability scales reliably with compute — and where that compute is concentrating into very few hands.*

A modern AI model — the thing behind ChatGPT, Claude, or Gemini — is fundamentally **a very large file of numbers**. Those numbers, called *weights*, encode patterns learned by reading an enormous amount of text. A large model might have 100 billion of them. That file is the model.

Training is how those numbers get produced. The process is almost comically simple in concept: show the model a sentence, ask it to predict the next word, tell it how wrong it was, and adjust the numbers a tiny bit. Do that billions of times across trillions of words, and something unexpected happens — the model generalizes in ways nobody explicitly taught it. It reasons, writes code, and translates, because those capabilities emerge from pattern-matching at sufficient scale.

![The training pipeline: tokens in, weights out.](/ai-governance/part-1/diagrams/DIA-001-training-pipeline.svg)
*DIA-001 — The training pipeline: tokens in, weights out.*

Each training run costs $100M–$1B+ in compute. Model N is often trained using model N-1 — the previous generation assists the next, creating a recursive dependency. Labs must recoup that cost by selling API access and products, which creates pressure to deploy quickly. Once a model's weights are released publicly ("open weights"), they cannot be recalled.

This is why **compute — raw processing power from specialized chips — sits at the center of the AI economy.** More compute plus more data reliably produces more capable models. This relationship has held for over a decade, and training compute has grown at roughly 4.4× per year since 2010. Whoever controls the most compute can train the most capable models. AI becomes an industrial arms race with a specific resource.

There's a second dynamic now in motion: **AI systems are beginning to assist in AI research itself.** DeepMind's AlphaProof solved International Mathematical Olympiad problems at silver-medal level in 2024. Sakana AI's "AI Scientist" system generates novel ML research ideas, writes and runs experiments, and produces peer-reviewed papers — the first such end-to-end automated system, published in *Nature*. This is the early stage of a second reinforcing loop sitting on top of the first: better AI assists the research that produces even better AI.

Part 2 turns to pace: why this is moving so fast.

> [!key] Key concept: stocks and flows
> Picture a bathtub. Water builds up in it over time — that's a *stock* (also called a reservoir or accumulation). The faucet and drain are *flows* — what fills or empties it. Model weights are a stock. Training is the flow that fills them. Compute, electricity, and engineers are flows that determine how fast the stock builds. AI-assisted research is an emerging flow that may dramatically accelerate how fast the stock grows.

> [!note]- What does "more compute" actually mean in practice?
> Training a frontier model requires running thousands of specialized chips (Nvidia H100s or equivalent) in parallel for weeks. Each chip costs $25,000–$40,000 to buy. A single frontier training run might use 10,000–30,000 simultaneously — $250M–$1.2B in hardware before electricity, engineers, or data. The rule of thumb that larger models are more capable — the "scaling hypothesis" — has held for over a decade, which is why spending keeps increasing. Training compute costs doubled roughly every eight months between 2015 and 2024, per Epoch AI's tracking of large-scale model training runs.

---