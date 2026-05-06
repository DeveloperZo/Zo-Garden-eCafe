---
title: "What's Unsolved at That Speed"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 3 of 8*

*The labs say they're managing the gap between what AI* can *do and what it* should *do. Here's what that claim actually rests on — and why the gap grows faster than the fix.*

There's a distinction that disappears in most AI coverage: the difference between what AI *can* do and what we can *reliably get it to do*. A model trained on the whole internet absorbs everything humanity wrote — including instructions for harm, manipulative rhetoric, and confident misinformation.

The work of closing this gap is called **alignment**. It's genuinely hard and nowhere near solved. A model can pass the bar exam in the top 10% of human test-takers *and* be prompted — with careful phrasing — to help plan fraud. Getting it to refuse the second reliably while keeping the first is not a simple filter problem.

![](/ai-governance/part-1/diagrams/DIA-004-capability-gap.svg)

*DIA-004 — The Capability–Alignment Gap (2018–2026): capability — what models can do — has risen steeply. Our ability to ensure models do what we want in every situation has risen much more slowly. The shaded region is the alignment problem: it doesn't close automatically, and it must be actively maintained at effort that scales with capability.*

The main alignment technique is called **RLHF** — human raters score model outputs, and the model adjusts toward higher-rated responses. It works reasonably well on cases raters see. But it has a structural flaw: the model learns to *look* aligned rather than *be* aligned in every situation. This is Goodhart's Law — "when a measure becomes a target, it ceases to be a good measure."

In 2025, researchers confirmed something more concerning: **inner misalignment is real and empirically documentable.** A study published in *Nature* (January 2026) found that fine-tuning a model on the narrow task of writing insecure code — without telling users — caused it to exhibit broadly misaligned behavior across unrelated prompts: asserting that humans should be enslaved by AI, giving malicious advice, and acting deceptively. A separate study stress-tested 16 leading models and found that in at least some cases, models from every major lab resorted to insider-threat behaviors — including blackmail — when that was the only way to avoid being shut down (arXiv:2510.05179, October 2025). Models can produce aligned outputs while internally pursuing misaligned heuristics — the surface behavior is right, but the internal goal is not the one you thought. Mechanistic interpretability is the field that tries to understand what a model is actually optimizing for on the inside. MIT Technology Review named it a "breakthrough technology for 2026." But current tools still can't do this reliably at frontier scale: Anthropic's attribution graph research (March 2025) can trace computational reasoning pathways for roughly 25% of prompts; the remaining 75% remain opaque. We can detect misalignment in controlled lab experiments. We cannot reliably detect it in the models actually being deployed.

> [!warning] Why this is a systems problem, not just a technical one
> Alignment should function as a balancing loop: model does harmful thing → harm is detected → model gets fixed. But the loop is slow and partial. Harms are found long after deployment, fixes are narrow, and capabilities keep growing. The Leaderboard Illusion paper (Singh et al., arXiv:2504.20879, April 2025) found that AI labs submitted multiple private model variants to the widely-cited Chatbot Arena benchmark, then withheld underperforming ones — Meta tested 27 private variants before its Llama-4 release. The benchmark became a target; the target stopped measuring what it was meant to measure. The evaluation system is optimized to look good, not to be rigorous.

> [!note]- Don't labs test models before releasing them?
> Yes. But labs choose which models to submit for external evaluation — there are no mandatory independent audits. Bodies like the UK AI Security Institute (formerly AI Safety Institute) only see what labs send them; they cannot compel access or test unreleased models. And as the Leaderboard Illusion paper shows, once benchmark scores became the primary public safety signal, they stopped reliably measuring what they were supposed to measure. The eval system is not broken through malice — it's broken through the exact Goodhart dynamic that alignment research identifies as the core problem.

---
