---
title: "How These Interact as a System"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 5 of 8*

*The previous four sections are not separate problems. They're parts of the same structure: a fast self-amplifying loop, a slow broken self-correcting loop, and a paradox that turns alarm into acceleration.*

Where are the self-amplifying loops? Which loops are supposed to correct them, and which is winning? In the AI system, the self-amplifying loops are large, fast, and well-capitalized. The stabilizing loops are under-resourced — and, as [[03-who-decides|Part 3]] and [[04-safety-as-signal|Part 4]] show, actively weakened by the same forces they're meant to check.

![](/ai-governance/part-1/diagrams/DIA-005-loops.svg)

*DIA-005 — Frontier capability accumulates as a stock fed by training. Two stabilizing loops should regulate it: the capability-gap loop (left) compares current capability against a frontier target, and the harm-feedback loop (right) is supposed to lower that target as deployment-driven harm becomes visible. The right loop is dashed because each step — making harm visible, mounting an oversight response, lowering the target — runs on multi-year delays and has been further weakened since 2025. The red sweep is R2: the same alarm signal that should slow training is also routed back into investment, where it accelerates training instead. (R1, the capability-attracts-capital self-amplifying loop, runs in parallel and was the focus of the prior section.)*

Watch what happens here. Safety research gets published. Safety policies get announced. The pressure for structural reform — liability law, mandatory audits, hard deployment gates — quietly drops. Not because the research is fake. Because its existence signals that the problem is being handled. The visible fix absorbs the urgency that would otherwise push toward the structural fix. Meadows calls this *shifting the burden*: the symptomatic solution works just well enough to prevent the fundamental one. The symbolic safety apparatus and unconstrained deployment coexist, and the capacity for deeper correction gradually weakens.

A third loop is forming. AI systems are now used in AI research itself — suggesting architectures, running experiments, writing training code. DeepMind's AlphaProof, Sakana AI's AI Scientist system, and widespread lab use of AI coding tools for ML workflows are early documented instances. As this matures, it adds a second self-amplifying loop on top of R1: better AI accelerates the research that produces even better AI. The feedback delay in this loop is shrinking. How fast it fires is genuinely uncertain — original AI 2027 timelines for full R&D automation have shifted to roughly 2032 in more recent forecasting — but the mechanism is real and already in motion.

> [!key]- The one constraint that's already permanent: open weights
> Compute is a flow — you can regulate chips, tax energy, slow permits. But model weights are a stock. DeepSeek-R1 (MIT license, January 20, 2025), Llama 3.x and its distillation chains have permanently exported reasoning-class capabilities outside any regulatory perimeter. Export controls on chips might slow who builds the *next* generation. They cannot un-release what already exists. AI capability, once in open weights, requires nothing further from the original lab. This irreversibility is structurally distinct from nuclear or biological weapons — both require ongoing access to controlled materials. AI capability doesn't.

---

*Next: [[06-why-not-fix-it|Part 6]] looks at why the stabilizing loops keep losing — and what it would take to strengthen them.*
