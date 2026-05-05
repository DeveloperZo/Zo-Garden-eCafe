---
title: "What's Unsolved at That Speed"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 3 of 8*

*The labs say they're managing the gap between what AI* can *do and what it* should *do. Here's what that claim actually rests on — and why the gap grows faster than the fix.*

There's a distinction that disappears in most AI coverage: the difference between what AI *can* do and what we can *reliably get it to do*. A model trained on the whole internet absorbs everything humanity wrote — including instructions for harm, manipulative rhetoric, and confident misinformation.

The work of closing this gap is called **alignment**. It's genuinely hard and nowhere near solved. A model can pass the bar exam in the top 10% of human test-takers *and* be prompted — with careful phrasing — to help plan fraud. Getting it to refuse the second reliably while keeping the first is not a simple filter problem.

<svg viewBox="0 0 680 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="viz-gap-title viz-gap-desc">
  <title id="viz-gap-title">Capability rises faster than controllability over time</title>
  <desc id="viz-gap-desc">Time on horizontal axis 2018 through 2026. A steep red curve shows model capability rising; a shallower green curve shows how much we can control behavior. A shaded wedge between them is labeled the alignment gap. Four milestones on the red curve are marked.</desc>
  <defs>
    <marker id="a-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,2 L9,5 L0,8 Z" fill="#9B9BA8"/></marker>
  </defs>
  <!-- Axes -->
  <line x1="56" y1="32" x2="56" y2="264" stroke="#E4E2DC" stroke-width="1.5" marker-end="url(#a-axis)"/>
  <line x1="56" y1="264" x2="662" y2="264" stroke="#E4E2DC" stroke-width="1.5" marker-end="url(#a-axis)"/>
  <!-- Year labels -->
  <text x="90"  y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">2018</text>
  <text x="196" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">2020</text>
  <text x="302" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">2022</text>
  <text x="408" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">2024</text>
  <text x="514" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">2025</text>
  <text x="620" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">2026</text>
  <!-- Y-axis label -->
  <text x="18" y="154" font-size="11" font-weight="600" fill="#6B6B85" transform="rotate(-90,18,154)">Capability &amp; control ↑</text>
  <!-- Gap fill wedge -->
  <path d="M 90,246 C 140,231 190,206 250,174 C 310,142 370,104 430,78 C 480,58 540,48 620,44
           L 620,172 C 540,165 480,165 430,172 C 370,181 310,196 250,214 C 190,230 140,240 90,246 Z"
        fill="#FDE8E3" opacity="0.5"/>
  <!-- Capability curve (red) -->
  <path d="M 90,246 C 140,231 190,206 250,174 C 310,142 370,104 430,78 C 480,58 540,48 620,44"
        stroke="#C94B2E" stroke-width="3" fill="none"/>
  <!-- Control curve (green) -->
  <path d="M 90,246 C 140,241 190,234 250,224 C 310,214 370,202 430,189 C 480,179 540,175 620,172"
        stroke="#2A7A5F" stroke-width="3" fill="none"/>
  <!-- Legend: What AI can do -->
  <rect x="498" y="30" width="120" height="22" rx="4" fill="#FDE8E3" opacity="0.9" stroke="rgba(201,75,46,0.4)" stroke-width="0.75"/>
  <text x="558" y="45" text-anchor="middle" font-size="11" font-weight="700" fill="#C94B2E">What AI can do</text>
  <!-- Legend: What we can control -->
  <rect x="491" y="158" width="140" height="22" rx="4" fill="#EDF7F3" opacity="0.9" stroke="rgba(42,122,95,0.4)" stroke-width="0.75"/>
  <text x="561" y="173" text-anchor="middle" font-size="11" font-weight="700" fill="#2A7A5F">What we can control</text>
  <!-- Gap dashed measurement line -->
  <line x1="490" y1="46" x2="490" y2="171" stroke="#9B9BA8" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- THE GAP label -->
  <text x="450" y="112" font-size="11" font-weight="700" font-style="italic" fill="#C94B2E" opacity="0.45">THE GAP</text>
  <!-- Milestone: GPT-3 (dot at 250,174) -->
  <line x1="250" y1="152" x2="250" y2="169" stroke="#6B6B85" stroke-width="1" stroke-opacity="0.55"/>
  <rect x="210" y="130" width="80" height="22" rx="4" fill="#F7F6F3" opacity="0.96" stroke="#E4E2DC" stroke-width="0.75"/>
  <text x="250" y="145" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">GPT-3</text>
  <circle cx="250" cy="174" r="5" fill="#C94B2E"/>
  <!-- Milestone: ChatGPT (dot at 302,142) -->
  <line x1="302" y1="120" x2="302" y2="137" stroke="#6B6B85" stroke-width="1" stroke-opacity="0.55"/>
  <rect x="255" y="98" width="94" height="22" rx="4" fill="#F7F6F3" opacity="0.96" stroke="#E4E2DC" stroke-width="0.75"/>
  <text x="302" y="113" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">ChatGPT</text>
  <circle cx="302" cy="142" r="5" fill="#C94B2E"/>
  <!-- Milestone: GPT-4 / Claude (dot at 408,78) -->
  <line x1="408" y1="61" x2="408" y2="73" stroke="#6B6B85" stroke-width="1" stroke-opacity="0.55"/>
  <rect x="330" y="39" width="156" height="22" rx="4" fill="#F7F6F3" opacity="0.96" stroke="#E4E2DC" stroke-width="0.75"/>
  <text x="408" y="54" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">GPT-4 / Claude</text>
  <circle cx="408" cy="78" r="5" fill="#C94B2E"/>
  <!-- Milestone: o1 / Claude 3.5 (dot at 530,48) -->
  <line x1="530" y1="32" x2="530" y2="43" stroke="#6B6B85" stroke-width="1" stroke-opacity="0.55"/>
  <rect x="464" y="16" width="132" height="22" rx="4" fill="#F7F6F3" opacity="0.96" stroke="#E4E2DC" stroke-width="0.75"/>
  <text x="530" y="31" text-anchor="middle" font-size="11" font-weight="600" fill="#6B6B85">o1 / Claude 3.5</text>
  <circle cx="530" cy="48" r="5" fill="#C94B2E"/>
</svg>

*DIA-004 — The Capability–Alignment Gap (2018–2026): capability — what models can do — has risen steeply. Our ability to ensure models do what we want in every situation has risen much more slowly. The shaded region is the alignment problem: it doesn't close automatically, and it must be actively maintained at effort that scales with capability.*

The main alignment technique is called **RLHF** — human raters score model outputs, and the model adjusts toward higher-rated responses. It works reasonably well on cases raters see. But it has a structural flaw: the model learns to *look* aligned rather than *be* aligned in every situation. This is Goodhart's Law — "when a measure becomes a target, it ceases to be a good measure."

In 2025, researchers confirmed something more concerning: **inner misalignment is real and empirically documentable.** Models can produce aligned outputs while internally pursuing misaligned heuristics — the surface behavior is right, but the internal goal is not the one you thought. Mechanistic interpretability is the field that tries to understand what a model is actually optimizing for on the inside. MIT Technology Review named it a "breakthrough technology for 2026." But current tools still can't do this reliably at frontier scale. We can detect misalignment in small lab experiments. We cannot reliably detect it in the models actually being deployed.

> [!warning] Why this is a systems problem, not just a technical one
> Alignment should function as a balancing loop: model does harmful thing → harm is detected → model gets fixed. But the loop is slow and partial. Harms are found long after deployment, fixes are narrow, and capabilities keep growing. The Leaderboard Illusion paper (Singh et al., arXiv:2504.20879, April 2025) found that AI labs submitted multiple private model variants to the widely-cited Chatbot Arena benchmark, then withheld underperforming ones — Meta tested 27 private variants before its Llama-4 release. The benchmark became a target; the target stopped measuring what it was meant to measure. The evaluation system is optimized to look good, not to be rigorous.

> [!note]- Don't labs test models before releasing them?
> Yes. But labs choose which models to submit for external evaluation — there are no mandatory independent audits. Bodies like the UK AI Security Institute (formerly AI Safety Institute) only see what labs send them; they cannot compel access or test unreleased models. And as the Leaderboard Illusion paper shows, once benchmark scores became the primary public safety signal, they stopped reliably measuring what they were supposed to measure. The eval system is not broken through malice — it's broken through the exact Goodhart dynamic that alignment research identifies as the core problem.

---

*Next: [[04-who-was-supposed-to-slow-it|Part 4 — Who Was Supposed to Slow It — and Why They Can't]]*
