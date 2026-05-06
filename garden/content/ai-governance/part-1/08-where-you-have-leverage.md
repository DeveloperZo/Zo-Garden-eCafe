---
title: "Where You Have Leverage"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 8 of 8*

*Meadows identified twelve places in any system where a push produces a meaningful shift in behavior. They're ranked by power. Most AI governance operates at the bottom. Real structural change lives higher up.*

A leverage point is a place in a system where a small change produces a large behavioral shift. Not all leverage is equal — there's a hierarchy. Changing a number (a content filter threshold, a compute reporting limit) is the weakest kind: the system absorbs it and the underlying loops continue. Changing the rules with real enforcement behind them, or changing what information flows to whom, is progressively more powerful. Changing the goals the system actually pursues is the most powerful of all — and the most resisted by whoever benefits from the current goal.

Meadows grouped the twelve points into a rough hierarchy. Applied to AI, they cluster into four tiers:

<div class="tier-grid">

<div class="tier-card tier-low">
<p><span class="tier-pill">Low Leverage</span> <strong>Parameters, buffers, physical structure (#12–10).</strong></p>
<p>Real engineering effort, rarely changes loop behavior. Most AI company "safety announcements" live here — updated content filters, new usage policies, adjusted thresholds. A useful tell: if the announcement doesn't change who's liable, who audits, or what deployment gates require, it's a parameter tweak. Worth watching because what a lab announces here tells you what tier it's actually operating at.</p>
</div>

<div class="tier-card tier-mid">
<p><span class="tier-pill">Medium Leverage</span> <strong>Delays, feedback strength, loop gain (#9–7).</strong></p>
<p>Shortening the time between when a harm occurs and when oversight can respond is a #9 intervention — and the most tractable change in this tier. Aviation's near-miss reporting system (ASRS) is the model: mandatory anonymous reporting that makes the balancing loop faster without requiring anyone to admit fault first. An AI equivalent doesn't exist. Building one would.</p>
</div>

<div class="tier-card tier-high">
<p><span class="tier-pill">High Leverage</span> <strong>Information flows, rules, who writes the rules (#6–4).</strong></p>
<p>A single product liability ruling that holds an AI company responsible for provable harm changes what every legal team in the industry tells its product team — no new legislation required. That's #5 operating through existing structure. Making harm visible through mandatory disclosure is #6: when utility companies moved electricity meters from basements to front porches, consumption fell 30% with no other policy change. The equivalent for AI would be public capability evaluation results and mandatory incident reporting.</p>
</div>

<div class="tier-card tier-xform">
<p><span class="tier-pill">Transformative</span> <strong>Goals, paradigm, coordination (#3–1).</strong></p>
<p>Denmark's flexicurity model shifted the system's goal from "employment stays stable" to "workers stay economically viable through transitions" — a #3 change requiring 5%+ of GDP and sustained political will. At #1, the coordination problem: the Montreal Protocol worked because scientists made the threat legible before it was politically convenient, giving actors a face-saving exit. That path exists for AI. Building the conditions for it is the longest-horizon work here.</p>
</div>

</div>

> [!warning] A note on timing
> Leverage points don't stay equally accessible over time. The legal loop is most accessible while courts are still setting precedent. The information loop is most accessible before opacity gets institutionalized. The coordination window is most accessible before capability is far enough ahead of oversight that major actors have no face-saving path back. None of those windows are closed. Some are narrowing.

---

Continue to [[../part-2/index|Part 2: What Can I Do About AI?]] — all 12 leverage points in full: what each one means in practice, who can actually move it, and what changing it does and doesn't accomplish.

---

### Primary sources

1. OpenAI Stargate announcement (openai.com/index/announcing-the-stargate-project, January 2025); OpenAI CFO Sarah Friar, Yahoo Finance interview, January 2026 (confirming $20B 2025 ARR); S&P Global Market Intelligence, Stargate financing analysis, 2025
2. IEA *Energy and AI* report, 2025 (electricity growth, grid delay figures)
3. Anthropic RSP v3.0, February 24, 2026 (anthropic.com)
4. TIME exclusive with Jared Kaplan, February 2026 (RSP pause removal)
5. Anthropic Series G press release, February 12, 2026
6. IMF Working Paper WP/25/76, April 2025 ("The Global Impact of AI: Mind the Gap")
7. IMF *Global Financial Stability Report* Chapter 1, April 2026 (circular financing)
8. Goldman Sachs Global Investment Research, 2023 (300M exposure estimate)
9. WEF *Future of Jobs Report*, 2025
10. BLS, "Incorporating AI Impacts in Employment Projections," 2025; Challenger, Gray & Christmas layoff data (AI-cited job losses), 2025
11. "The Leaderboard Illusion," Singh et al., arXiv:2504.20879, April 2025
12. *Garcia v. Character.AI* settlement, January 2026
13. OpenAI wrongful-death suits (*Adams v. OpenAI*), N.D. Cal., motion denied April 2026
14. Air Canada chatbot liability ruling, 2025
15. Gallagher Re / MIT "Smart Systems, Blind Spots," March 2026
16. IEEFA and Utility Dive reporting on PJM capacity auction failure, December 2025
17. EU AI Act implementation timeline (artificialintelligenceact.eu)
18. Trump Executive Order 14179, January 23, 2025
19. America's AI Action Plan, White House, July 2025
20. Yoshua Bengio (ed.), *International AI Safety Report*, 2026
21. DeepMind AlphaProof, *Nature*, 2025
22. Sakana AI, "The AI Scientist v2," arXiv:2504.08066, 2025
23. Epoch AI training compute data, 2025
24. Yudkowsky and Soares, *If Anyone Builds It, Everyone Dies*, March 2026
25. AI 2027 scenario (ai-2027.com), Kokotajlo et al., 2025; AI Futures Model December 2025 update (blog.ai-futures.org — median SC timeline revised to 2032.5)
26. Betley et al., "Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs," *Nature* (January 2026); arXiv:2502.17424
27. "Agentic Misalignment: How LLMs Could Be Insider Threats," arXiv:2510.05179, October 2025
28. Anthropic, "Tracing the Thoughts of a Large Language Model" (attribution graphs), March 2025 (anthropic.com/research/tracing-thoughts-language-model)
29. DOJ, Operation Gatekeeper (chip smuggling network, $160M), December 2025; CNBC reporting
30. US v. Liaw et al. (Super Micro co-founder, $2.5B chip smuggling), S.D.N.Y., March 2026; Fortune, CNN, Bloomberg
31. Manning, "How Adaptable Are American Workers to AI-Induced Job Displacement?" NBER Working Paper 34705, 2025; Brookings Institution analysis
32. TrendForce / Asia Times reporting on China EUV prototype (2028 target), December 2025; Bloomberg on Huawei Ascend 910C production (600,000 units, 2026), September 2025
33. MIT Technology Review, "Mechanistic Interpretability," 10 Breakthrough Technologies 2026, January 2026

**Leverage framework:** Donella H. Meadows, *Thinking in Systems: A Primer* (Chelsea Green, 2008). Twelve leverage points: pp. 145–165.

*This is an analytical explainer applying a systems-thinking framework to publicly documented facts — not financial or investment advice, not legal advice, and not a prediction of specific outcomes. Probability estimates for catastrophic risk reflect the range of credible expert opinion; none are the author's own forecast.*
