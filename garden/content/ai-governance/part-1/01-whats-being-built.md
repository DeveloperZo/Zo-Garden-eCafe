---
title: "What's Being Built"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 1 of 8*

*Before asking whether AI can self-govern, understand what it is: systems where raw capability scales reliably with compute — and where that compute is concentrating into very few hands.*

Forget the robot imagery. A modern AI model — the thing behind ChatGPT, Claude, or Gemini — is fundamentally **a very large file of numbers**. Those numbers, called *weights*, encode patterns learned by reading an enormous amount of text. A large model might have 100 billion of them. That file is the model.

Training is how those numbers get produced. The process is almost comically simple in concept: show the model a sentence, ask it to predict the next word, tell it how wrong it was, and adjust the numbers a tiny bit. Do that billions of times across trillions of words, and something unexpected happens — the model generalizes in ways nobody explicitly taught it. It reasons, writes code, and translates, because those capabilities emerge from pattern-matching at sufficient scale.

<svg viewBox="0 0 730 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="viz-train-title viz-train-desc">
  <title id="viz-train-title">Training pipeline from data to inference</title>
  <desc id="viz-train-desc">Flow reads left to right: Internet → training data → training run → trained model weights → user prompts. A dashed curved arrow loops from user prompts back toward the internet and training data, labeled outputs inform the next training run.</desc>
  <defs>
    <marker id="t-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto" markerUnits="strokeWidth"><path d="M0,1 L9,5 L0,9 Z" fill="#9B9BA8"/></marker>
    <marker id="t-red"  viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto" markerUnits="strokeWidth"><path d="M0,1 L9,5 L0,9 Z" fill="#C94B2E"/></marker>
  </defs>
  <text x="66"  y="28" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">① collect</text>
  <text x="211" y="28" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">② filter &amp; label</text>
  <text x="370" y="28" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">③ billions of tiny adjustments</text>
  <text x="529" y="28" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">④ result</text>
  <text x="665" y="28" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">⑤ your use</text>
  <rect x="11"  y="70" width="110" height="62" rx="9" fill="#E3E8F5" stroke="#3A5498" stroke-width="2"/>
  <text x="66"  y="95"  text-anchor="middle" font-size="12" font-weight="700" fill="#3A5498">THE</text>
  <text x="66"  y="111" text-anchor="middle" font-size="12" font-weight="700" fill="#3A5498">INTERNET</text>
  <text x="66"  y="124" text-anchor="middle" font-size="10" fill="#3A5498">trillions of words</text>
  <line x1="121" y1="101" x2="146" y2="101" stroke="#9B9BA8" stroke-width="2" marker-end="url(#t-gray)"/>
  <rect x="148" y="70" width="126" height="62" rx="9" fill="#E3E8F5" stroke="#3A5498" stroke-width="2"/>
  <text x="211" y="95"  text-anchor="middle" font-size="12" font-weight="700" fill="#3A5498">TRAINING</text>
  <text x="211" y="111" text-anchor="middle" font-size="12" font-weight="700" fill="#3A5498">DATA</text>
  <text x="211" y="124" text-anchor="middle" font-size="10" fill="#3A5498">cleaned &amp; curated</text>
  <line x1="274" y1="101" x2="299" y2="101" stroke="#9B9BA8" stroke-width="2" marker-end="url(#t-gray)"/>
  <rect x="301" y="51" width="138" height="100" rx="9" fill="#FDE8E3" stroke="#C94B2E" stroke-width="2"/>
  <text x="370" y="78"  text-anchor="middle" font-size="12" font-weight="700" fill="#C94B2E">TRAINING RUN</text>
  <text x="370" y="92"  text-anchor="middle" font-size="10" fill="#C94B2E">weeks · millions of $</text>
  <text x="370" y="106" text-anchor="middle" font-size="10" fill="#C94B2E">specialized chips only</text>
  <text x="370" y="120" text-anchor="middle" font-size="10" fill="#C94B2E">~$100M–$1B per run</text>
  <text x="370" y="134" text-anchor="middle" font-size="9.5" font-style="italic" fill="#C94B2E" opacity="0.85">uses N-1 model to help train N</text>
  <line x1="439" y1="101" x2="464" y2="101" stroke="#9B9BA8" stroke-width="2" marker-end="url(#t-gray)"/>
  <rect x="466" y="70" width="126" height="62" rx="9" fill="#EDF7F3" stroke="#2A7A5F" stroke-width="2"/>
  <text x="529" y="95"  text-anchor="middle" font-size="12" font-weight="700" fill="#2A7A5F">THE MODEL</text>
  <text x="529" y="111" text-anchor="middle" font-size="11" fill="#2A7A5F">~100B numbers</text>
  <text x="529" y="124" text-anchor="middle" font-size="10" fill="#2A7A5F">a file that persists</text>
  <text x="529" y="136" text-anchor="middle" font-size="9.5" font-style="italic" fill="#2A7A5F" opacity="0.85">must recoup training cost</text>
  <line x1="592" y1="101" x2="617" y2="101" stroke="#9B9BA8" stroke-width="2" marker-end="url(#t-gray)"/>
  <rect x="619" y="70" width="100" height="62" rx="9" fill="#FEF8E8" stroke="#C9880A" stroke-width="2"/>
  <text x="669" y="95"  text-anchor="middle" font-size="12" font-weight="700" fill="#C9880A">YOUR</text>
  <text x="669" y="111" text-anchor="middle" font-size="12" font-weight="700" fill="#C9880A">PROMPT</text>
  <text x="669" y="124" text-anchor="middle" font-size="10" fill="#C9880A">inference</text>
  <path d="M 665 135 Q 665 198 370 205 Q 120 198 68 135" stroke="#C94B2E" stroke-width="1.5" stroke-dasharray="5,4" fill="none" marker-end="url(#t-red)"/>
  <text x="370" y="222" text-anchor="middle" font-size="12" font-weight="600" fill="#C94B2E">Feedback: outputs evaluated → inform the next training run</text>
</svg>

*DIA-001 — Training pipeline: from data collection through training run to inference, with feedback loop.*

Each training run costs $100M–$1B+ in compute. Critically, **model N is often trained using model N-1** — the previous generation assists the next, creating a recursive dependency. That training cost must be recouped by selling API access and products, which creates structural pressure to deploy before safety review is complete. Once a model's weights are released publicly ("open weights"), they cannot be recalled.

This is why **compute — raw processing power from specialized chips — sits at the center of the AI economy.** More compute plus more data reliably produces more capable models. This relationship has held for over a decade, and training compute has grown at roughly 4.4× per year since 2010. Whoever controls the most compute can train the most capable models. AI becomes an industrial arms race with a specific resource.

There's a second dynamic now in motion: **AI systems are beginning to assist in AI research itself.** DeepMind's AlphaProof solved International Mathematical Olympiad problems at silver-medal level in 2024. Sakana AI's "AI Scientist" system generates novel ML research ideas, writes and runs experiments, and produces peer-reviewed papers — the first such end-to-end automated system, published in *Nature*. Labs are using AI models to suggest model architectures, run experiments, and iterate on training runs. This is the early stage of a second reinforcing loop sitting on top of the first: better AI assists the research that produces even better AI.

> [!key] Key concept: stocks vs. flows
> A *stock* accumulates over time — like water in a bathtub. A *flow* is what fills or drains it. Model weights are a stock. Training is the flow that fills them. Compute, electricity, and engineers are flows that determine how fast the stock builds. **Open-weights releases are permanent:** once DeepSeek-R1 (MIT license, January 20, 2025) or Llama's weights left the lab, no regulation can drain that stock. The capability is in the world forever. AI-assisted research is an emerging flow that may dramatically accelerate how fast the stock grows.

> [!note]- What does "more compute" actually mean in practice?
> Training a frontier model requires running thousands of specialized chips (Nvidia H100s or equivalent) in parallel for weeks. Each chip costs $25,000–$40,000 to buy. A single frontier training run might use 10,000–30,000 simultaneously — $250M–$1.2B in hardware before electricity, engineers, or data. The rule of thumb that larger models are more capable — the "scaling hypothesis" — has held for over a decade, which is why spending keeps increasing. Training compute costs doubled roughly every eight months between 2015 and 2024, per Epoch AI's tracking of large-scale model training runs.

---

*Next: [[02-why-its-moving|Part 2 — Why It's Moving So Fast]]*
