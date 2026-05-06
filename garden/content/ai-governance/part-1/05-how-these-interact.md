---
title: "How These Interact as a System"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 5 of 8*

*The previous four sections are not separate problems. They're parts of the same structure: a fast reinforcing loop, a slow broken balancing loop, and a paradox that turns alarm into acceleration.*

The structural question is: where are the reinforcing loops, which loops are balancing them, and which are winning? In the AI system, the reinforcing loops are large, fast, and well-capitalized. The balancing loops are under-resourced and, as sections 3 and 4 show, actively weakening.

![](/ai-governance/part-1/diagrams/DIA-006-loops.svg)

*DIA-006 — Frontier capability accumulates as a stock fed by training. Two balancing loops should regulate it: the capability-gap loop (left) compares current capability against a frontier target, and the harm-feedback loop (right) is supposed to lower that target as deployment-driven harm becomes visible. The right loop is dashed because each step — making harm visible, mounting an oversight response, lowering the target — runs on multi-year delays and has been further weakened since 2025. The red sweep is R2: the same alarm signal that should slow training is also routed back into investment, where it accelerates training instead. (R1, the capability-attracts-capital reinforcer, runs in parallel and was the focus of the prior section.)*

This pattern is called *shifting the burden*: a system applies a visible but partial fix to a problem, reducing pressure to fix it structurally. Safety research and published safety policies play this role — they are real work, but their existence reduces urgency for binding structural changes (liability law, mandatory audits, hard deployment gates). The symbolic safety apparatus coexists with unconstrained deployment, and the capacity for deeper correction gradually weakens.

There's also a third loop forming. AI systems are now being used in AI research itself — suggesting architectures, running experiments, writing training code. This is early-stage but documented: DeepMind's AlphaProof, Sakana AI's AI Scientist system, and widespread lab use of AI coding tools for ML workflows. As this matures, it adds a second reinforcing loop on top of R1: better AI accelerates the research that produces even better AI. The feedback delay in this loop is compressing. Whether and how fast it fires is genuinely uncertain — original AI 2027 timelines for full R&D automation have shifted from 2027 to roughly 2032 in more recent forecasting — but the mechanism is real and already in motion.

> [!key] The one constraint that's already permanent: open weights
> Compute is a flow — you can regulate chips, tax energy, slow permits. But model weights are a stock. DeepSeek-R1 (MIT license, January 20, 2025), Llama 3.x and its distillation chains have permanently exported reasoning-class capabilities outside any regulatory perimeter. Export controls on chips might slow who builds the *next* generation. They cannot un-release what already exists. AI capability, once in open weights, requires nothing further from the original lab. This irreversibility is structurally distinct from nuclear or biological weapons — both require ongoing access to controlled materials. AI capability doesn't.

---
