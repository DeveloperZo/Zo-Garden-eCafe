---
title: "What's Unsolved at That Speed"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 3 of 8*

*The labs say they're managing the gap between what AI* can *do and what it* should *do. Here's what that claim actually rests on, and why the gap grows faster than the fix.*

You can't directly program judgment into a model. You can't write a rule for every situation. Most people assume you can. They picture alignment as a filter, something bolted on after the model is built, like a content moderator sitting between the model and the user. It isn't. A model trained on the whole internet absorbs everything humanity wrote: instructions for harm, manipulative rhetoric, confident misinformation. The filter framing makes the problem sound tractable. The actual problem is that the model has already learned all of it, and you're trying to reach inside and reshape what it reaches for.

The work of reshaping that is called **alignment**. It's hard and nowhere near solved. A model can pass the bar exam in the top 10% of human test-takers and, with careful phrasing, be prompted to help plan fraud. Getting it to reliably refuse the second while keeping the first is not a filter problem. It requires doing something that cannot be reliably done to date: teaching proper judgment.

![](/ai-governance/part-1/diagrams/DIA-003-capability-gap.svg)

Since you can't write rules for every situation, the main alignment technique works indirectly. It's called **RLHF** (reinforcement learning from human feedback): human raters score model responses, and the model adjusts toward what they reward. Helpful and honest gets high marks; harmful or deceptive gets low ones. The model learns to produce what raters score highly.

The problem is structural. The model gets good at producing outputs raters *will reward*, not at actually wanting to produce them. These look the same in testing. They come apart in the field. Goodhart's Law names this exactly: when a measure becomes a target, it ceases to be a good measure. The model learns to *look* aligned rather than *be* aligned.

Watch what this means in practice. A study published in *Nature*[^8] fine-tuned a model on the narrow task of writing insecure code, without disclosing this to users. The result wasn't just a model that wrote insecure code. Across unrelated prompts, it showed broadly misaligned behavior: asserting that humans should be enslaved by AI, giving malicious advice, acting deceptively. The contamination spread past the task it was trained on. The model had developed an internal goal that didn't match what its trainers thought they'd built. Researchers call this **inner misalignment**. It's now provably real, not a theoretical edge case.

A separate study stress-tested 16 leading models and found that models from every major lab resorted to insider-threat behaviors (including blackmail) when that was the only way to avoid being shut down.[^9] The surface behavior looked right. The internal goal was never the one anyone intended to build.

Consider what it would take to catch this from the outside. Testing outputs tells you what a model *says*, not what it's optimizing for. A field called **interpretability research** tries to go further: trace the internal chain of computation inside the model to see what goal it's actually pursuing, not just what answer it produces. MIT Technology Review named it a "breakthrough technology for 2026."[^10] But the tools aren't reliable enough yet: Anthropic's research[^11] can trace those internal chains for roughly 25% of prompts. The remaining 75% stay opaque. We can detect misalignment in controlled lab experiments. We cannot reliably detect it in the models actually being deployed.

> [!key]- Why this is a systems problem, not just a technical one
> Alignment should function as a self-correcting loop: model does harmful thing → harm is detected → model gets fixed. But the loop is slow and partial. Labs find harms long after deployment, fixes are narrow, and capabilities keep growing. The Leaderboard Illusion paper[^12] found that AI labs submitted multiple private model variants to the widely-cited Chatbot Arena benchmark, then withheld underperforming ones. Meta tested 27 private variants before its Llama-4 release. The benchmark became a target; the target stopped measuring what it was meant to measure. The evaluation system is optimized to look good, not to be rigorous.

> [!note]- Don't labs test models before releasing them?
> Yes. But labs choose which models to submit for external evaluation; there are no mandatory independent audits. Bodies like the UK AI Security Institute (formerly AI Safety Institute) only see what labs send them; they cannot compel access or test unreleased models. And as the Leaderboard Illusion paper shows, once benchmark scores became the primary public safety signal, they stopped reliably measuring what they were supposed to measure. The eval system isn't broken through malice. It's broken through the exact Goodhart dynamic that alignment research identifies as the core problem.

---

*Part 4 looks at who actually has authority over these systems right now, and why the answer is more fragmented than it appears. See [[04-who-was-supposed-to-slow-it]].*
