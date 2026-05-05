---
title: "Who Was Supposed to Slow It — and Why They Can't"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 4 of 8*

*Every functioning system needs a balancing loop. For AI, that was supposed to be government oversight and independent safety research. Here is what that loop is actually resourced with, and what has happened to it.*

The regulatory bodies with actual enforcement power — electricity grid operators, utility commissions, federal courts — were not designed for AI and have no AI mandate. The bodies that have an AI mandate have no enforcement power. This mismatch has been widening.

<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="viz-oversight-title viz-oversight-desc">
  <title id="viz-oversight-title">Industry scale compared to oversight resources</title>
  <desc id="viz-oversight-desc">Two columns: left shows large industry figures; right shows smaller oversight budgets and limited enforcement capability.</desc>
  <!-- Left panel: AI Industry -->
  <rect x="10" y="10" width="294" height="280" rx="10" fill="#FDE8E3" stroke="#C94B2E" stroke-width="2"/>
  <text x="157" y="36" text-anchor="middle" font-size="13" font-weight="800" fill="#C94B2E">AI INDUSTRY</text>
  <circle cx="22" cy="58" r="3" fill="#C94B2E"/>
  <text x="26" y="62" font-size="11" fill="#6B6B85">Hyperscaler capex 2025</text>
  <text x="26" y="77" font-size="12" font-weight="700" fill="#C94B2E">~$448B</text>
  <circle cx="22" cy="86" r="3" fill="#C94B2E"/>
  <text x="26" y="90" font-size="11" fill="#6B6B85">Committed infrastructure</text>
  <text x="26" y="105" font-size="12" font-weight="700" fill="#C94B2E">&gt;$1T</text>
  <circle cx="22" cy="114" r="3" fill="#C94B2E"/>
  <text x="26" y="118" font-size="11" fill="#6B6B85">Frontier AI researchers</text>
  <text x="26" y="133" font-size="12" font-weight="700" fill="#C94B2E">~10,000</text>
  <circle cx="22" cy="142" r="3" fill="#C94B2E"/>
  <text x="26" y="146" font-size="11" fill="#6B6B85">AI data center growth 2025</text>
  <text x="26" y="161" font-size="12" font-weight="700" fill="#C94B2E">+50% (IEA)</text>
  <circle cx="22" cy="170" r="3" fill="#C94B2E"/>
  <text x="26" y="174" font-size="11" fill="#6B6B85">Model release cadence</text>
  <text x="26" y="189" font-size="12" font-weight="700" fill="#C94B2E">every 2&#x2013;4 months</text>
  <circle cx="22" cy="198" r="3" fill="#C94B2E"/>
  <text x="26" y="202" font-size="11" fill="#6B6B85">OpenAI valuation</text>
  <text x="26" y="217" font-size="12" font-weight="700" fill="#C94B2E">$852B (Oct 2025)</text>
  <circle cx="22" cy="226" r="3" fill="#C94B2E"/>
  <text x="26" y="230" font-size="11" fill="#6B6B85">Labs self-report safety evals</text>
  <text x="26" y="245" font-size="12" font-weight="700" fill="#C94B2E">no external audits</text>
  <circle cx="22" cy="254" r="3" fill="#C94B2E"/>
  <text x="26" y="258" font-size="11" fill="#6B6B85">Anthropic RSP v3 (Feb 2026)</text>
  <text x="26" y="273" font-size="12" font-weight="700" fill="#C94B2E">removed pause commitment</text>
  <!-- VS connector -->
  <circle cx="320" cy="148" r="22" fill="#F0EFF0" stroke="#9B9BA8" stroke-width="1.5"/>
  <text x="320" y="155" text-anchor="middle" font-size="14" font-weight="900" fill="#6B6B85">VS</text>
  <!-- Right panel: AI Oversight -->
  <rect x="336" y="10" width="294" height="280" rx="10" fill="#EDF7F3" stroke="#2A7A5F" stroke-width="2"/>
  <text x="483" y="36" text-anchor="middle" font-size="13" font-weight="800" fill="#2A7A5F">AI OVERSIGHT</text>
  <circle cx="348" cy="58" r="3" fill="#C94B2E"/>
  <text x="352" y="62" font-size="11" fill="#6B6B85">US AISI &#x2192; CAISI (June 2025)</text>
  <text x="352" y="77" font-size="11.5" font-weight="700" font-style="italic" fill="#C94B2E">layoffs Feb 2025 &#xB7; ~$10M FY2024</text>
  <circle cx="348" cy="98" r="3" fill="#2A7A5F"/>
  <text x="352" y="102" font-size="11" fill="#6B6B85">UK AI Security Institute</text>
  <text x="352" y="117" font-size="11.5" font-weight="700" font-style="italic" fill="#2A7A5F">&#xA3;66M/yr &#xB7; rebranded Feb 2025</text>
  <circle cx="348" cy="138" r="3" fill="#C94B2E"/>
  <text x="352" y="142" font-size="11" fill="#6B6B85">EU AI Act enforcement</text>
  <text x="352" y="157" font-size="11.5" font-weight="700" font-style="italic" fill="#C94B2E">Aug 2026 &#x2014; 8 of 27 states ready</text>
  <circle cx="348" cy="178" r="3" fill="#C94B2E"/>
  <text x="352" y="182" font-size="11" fill="#6B6B85">Biden AI EO (Oct 2023)</text>
  <text x="352" y="197" font-size="11.5" font-weight="700" font-style="italic" fill="#C94B2E">revoked Jan 20, 2025</text>
  <circle cx="348" cy="210" r="3" fill="#2A7A5F"/>
  <text x="352" y="214" font-size="11" fill="#6B6B85">AI fines collected globally</text>
  <text x="352" y="229" font-size="11.5" font-weight="700" fill="#2A7A5F">~$400K total</text>
  <circle cx="348" cy="242" r="3" fill="#2A7A5F"/>
  <text x="352" y="246" font-size="11" fill="#6B6B85">OpenAI wrongful-death suits</text>
  <text x="352" y="261" font-size="11.5" font-weight="700" font-style="italic" fill="#2A7A5F">proceeding as of April 2026</text>
</svg>

*DIA-005 — Oversight Resources vs. Industry Scale (2025–2026): the US AISI budget was roughly equal to what Anthropic spends on compute for a small fellowship program — before most of its staff were cut in February 2025 and it was renamed CAISI. The EU AI Act's enforcement powers activate in August 2026, but only 8 of 27 member states had designated competent authorities by the required deadline.*

> [!warning] The safety policy that weakened itself in public
> Anthropic's Responsible Scaling Policy — the document governing when Anthropic pauses model development — was updated February 24, 2026 to remove its previous binding pause commitment. Jared Kaplan (newly named Responsible Scaling Officer) told TIME: *"We felt that it wouldn't actually help anyone for us to stop training AI models."* He added that the company "didn't really feel… that it made sense for us to make unilateral commitments… if competitors are blazing ahead." This is *drift to low performance* — a well-documented pattern in competitive systems: the standard gets quietly redefined to match current behavior, under competitive pressure. Once one actor lowers the bar, pressure builds on every other actor to follow.

> [!warning] The liability cases — what settled and what didn't
> Garcia v. Character.AI (M.D. Fla.) — the landmark case treating chatbot output as a product rather than protected speech — settled in January 2026 with undisclosed terms and safety-feature commitments for users under 18. A settlement means no appellate precedent was established: the most important legal question (whether AI output is a product subject to product liability) remains formally unresolved. Meanwhile, OpenAI's wrongful-death suits survived a motion to dismiss in April 2026 (Adams case, N.D. Cal.) and are proceeding toward discovery. The Air Canada chatbot case produced the first concrete liability judgment — a tribunal held the company responsible for its chatbot's incorrect information, rejecting the argument that the chatbot was a "separate entity." Total AI fines collected globally through May 2026: approximately $400,000.

> [!warning] The missing price signal: insurance hasn't caught up
> In a normally functioning market, insurance premiums rise as risk rises, creating a financial feedback signal that disciplines risky behavior. For AI, this signal is still largely absent. A March 2026 report by Gallagher Re and MIT found that standard cyber and general-liability policies don't cover AI-native liabilities: hallucinations, biased decisions, and flawed training data fall outside typical coverage. AI-related lawsuits increased 978% between 2020 and 2025 — but insurers are still developing frameworks rather than pricing the risk. The first stand-alone AI liability product for small businesses launched only in March 2026 (HSB/Munich Re). Until insurance pricing reflects AI risk, the market balancing loop remains absent.

> [!note]- Why do safety researchers who leave labs just start more AI labs?
> Ilya Sutskever co-founded OpenAI, led its safety efforts, cast a public conscience vote at the November 2023 board crisis — then left in May 2024 and founded Safe Superintelligence (SSI), which raised $2B at a $32B valuation by early 2025. Mira Murati (OpenAI's former CTO) founded Thinking Machines Lab. Jan Leike (former OpenAI safety lead) joined Anthropic. Every high-profile safety departure from a frontier lab has created a new well-capitalized frontier lab, not a reduction in aggregate capability. From a systems perspective, safety dissent is a *reinforcing* input to industry capacity, not a balancing one. The system converts internal criticism into new competitors.

---

*Next: [[05-how-these-interact|Part 5 — How These Interact as a System]]*
