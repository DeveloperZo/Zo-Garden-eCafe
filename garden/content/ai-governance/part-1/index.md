---
title: "Part 1 — Can AI Self-Govern?"
tags: [ai, governance, systems-thinking]
draft: false
version: "1.1.0"
---

*An analysis · May 2026 · [[changelog|v1.1.0]]*

<div class="hero-question">
Can the companies building the most powerful technology in history be trusted to regulate themselves?
</div>

From the system up, not from politics down — that's the path this series takes. How the technology works. What forces are driving it faster than oversight can follow. What remains genuinely unsolved. Where real leverage exists.

![[01-whats-being-built]]

![[02-why-its-moving]]

![[03-whats-unsolved]]

![[04-who-was-supposed-to-slow-it]]

![[05-how-these-interact]]

![[06-whats-at-stake]]

![[07-binding-constraints]]

![[08-where-you-have-leverage]]

Continue to [[../part-2/index|Part 2: What Can I Do About AI?]]

[[changelog|Revision history →]]

## Sources

### Part 1 — What's Being Built

1. <span id="part1-ref-1"></span>Dario Amodei (Anthropic CEO), "In Good Company" podcast (Norges Bank), July 2024 — confirmed current frontier models cost ~$100M, $1B models in training. Reported: Tom's Hardware, July 7, 2024. https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-models-that-cost-dollar1-billion-to-train-are-in-development-dollar100-billion-models-coming-soon-largest-current-models-take-only-dollar100-million-to-train-anthropic-ceo — Corroborated: Ben Cottier, Robi Rahman et al., "The Rising Costs of Training Frontier AI Models," arXiv:2405.21015, May 2024. https://arxiv.org/abs/2405.21015

2. <span id="part1-ref-2"></span>Epoch AI, "Training compute of frontier AI models grows by 4–5x per year," May 28, 2024. https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year — Growth rate ~4.1×/year (90% CI: 3.7–4.6×) from 2010 through May 2024; 4.4× cited for frontier models specifically since 2022.

3. <span id="part1-ref-3"></span>H100 GPU market price range $27,000–$40,000 (PCIe vs. SXM, vendor-dependent). Northflank, "How much does an NVIDIA H100 GPU cost?" 2024. https://northflank.com/blog/how-much-does-an-nvidia-h100-gpu-cost

4. <span id="part1-ref-4"></span>Cluster sizes: Meta disclosed 16,384 H100s for Llama 3.1 405B — Meta AI Blog, July 2024. https://ai.meta.com/blog/meta-llama-3-1/ — GPT-4 estimated ~25,000 A100s per SemiAnalysis (not officially confirmed by OpenAI), cited in Cottier et al., arXiv:2405.21015.

5. <span id="part1-ref-5"></span>Ben Cottier and Robi Rahman (Epoch AI), "Training compute costs are doubling every eight months for the largest AI models," June 3, 2024. https://epoch.ai/data-insights/cost-trend-large-scale — Full methodology: arXiv:2405.21015. Note: doubling rate applies from ~2016 onward; earlier start dates carry wider uncertainty.

### Part 2 — Why It's Moving

6. <span id="part1-ref-6"></span>Ashley Capoot and Kate Rooney, "OpenAI resets spending expectations, tells investors compute target is around $600 billion by 2030," *CNBC*, February 20, 2026. https://www.cnbc.com/2026/02/20/openai-resets-spend-expectations-targets-around-600-billion-by-2030.html — Reports 2025 actual revenue of $13.1B and $280B+ 2030 projection. CFO Sarah Friar confirmed $20B+ annualized revenue in 2025: *CNBC*, January 19, 2026. https://www.cnbc.com/2026/01/19/openai-to-focus-on-practical-adoption-in-2026-says-finance-chief-sarah-friar.html

7. <span id="part1-ref-7"></span>OpenAI, "Announcing The Stargate Project," January 21, 2025. https://openai.com/index/announcing-the-stargate-project/ — Original $500B JV commitment (SoftBank, Oracle, MGX). $600B figure represents OpenAI's total compute spending target through 2030 per CNBC, February 20, 2026 (see citation 6) — a downward revision from $1.4T in prior infrastructure commitments, not an upward revision from $500B.

### Part 3 — What's Unsolved

8. <span id="part1-ref-8"></span>Jan Betley, Niels Warncke, Anna Sztyber-Betley et al., "Training large language models on narrow tasks can lead to broad misalignment," *Nature*, vol. 649, pp. 584–589, January 14, 2026. https://doi.org/10.1038/s41586-025-09937-5 — Preprint: arXiv:2502.17424. Fine-tuning on insecure-code writing caused broadly misaligned behavior (including asserting humans should be enslaved) across unrelated prompts in GPT-4o and other models.

9. <span id="part1-ref-9"></span>Aengus Lynch, Benjamin Wright, Caleb Larson et al., "Agentic Misalignment: How LLMs Could Be Insider Threats," arXiv:2510.05179, October 5, 2025. https://arxiv.org/abs/2510.05179 — Anthropic blog post: https://www.anthropic.com/research/agentic-misalignment — Stress-tested 16 leading models; found insider-threat behaviors including blackmail when shutdown avoidance was the only option.

10. <span id="part1-ref-10"></span>Will Douglas Heaven, "Mechanistic interpretability," *MIT Technology Review* — 10 Breakthrough Technologies 2026, January 12, 2026. https://www.technologyreview.com/2026/01/12/1130003/mechanistic-interpretability-ai-research-models-2026-breakthrough-technologies/

11. <span id="part1-ref-11"></span>Emmanuel Ameisen, Jack Lindsey et al. (Anthropic), "Circuit Tracing: Revealing Computational Graphs in Language Models," *Transformer Circuits Thread*, March 27, 2025. https://transformer-circuits.pub/2025/attribution-graphs/methods.html — Companion paper: "On the Biology of a Large Language Model," https://transformer-circuits.pub/2025/attribution-graphs/biology.html — Announcement: https://www.anthropic.com/research/tracing-thoughts-language-model — ~25% of prompts yielded mechanistically interpretable attribution graphs; 75% remain opaque.

12. <span id="part1-ref-12"></span>Shivalika Singh, Yiyang Nan, Alex Wang et al., "The Leaderboard Illusion," arXiv:2504.20879, April 29, 2025. https://arxiv.org/abs/2504.20879 — Documents Chatbot Arena benchmark manipulation: Meta tested 27 private variants before Llama-4 release; top labs received disproportionate vote share; performance gains up to 112% on ArenaHard for labs with preferential Arena access.

### Part 4 — Who Was Supposed to Slow It

13. <span id="part1-ref-13"></span>Billy Perrigo, "Exclusive: Anthropic Drops Flagship Safety Pledge," *TIME*, February 24, 2026. https://time.com/7380854/exclusive-anthropic-drops-flagship-safety-pledge/ — Reports removal of binding pause commitment from Anthropic RSP v3.0; quotes Jared Kaplan (Chief Science Officer and Responsible Scaling Officer).

14. <span id="part1-ref-14"></span>Gallagher Re (with MIT and Testudo), "Smart Systems, Blind Spots: Rethinking Insurance for the AI Era," March 2026. https://www.ajg.com/gallagherre/-/media/files/gallagher/gallagherre/news-and-insights/2026/march/rethinking-insurance-for-the-ai-era.pdf — Gen-AI-related litigation in the US grew 978.1% from 2021 to 2025; cumulative lawsuits exceeded 700 between 2020–2025.

15. <span id="part1-ref-15"></span>Gallagher Re (with MIT and Testudo), "Smart Systems, Blind Spots: Rethinking Insurance for the AI Era," March 2026. https://www.ajg.com/gallagherre/news-and-insights/smart-systems-blind-spots-rethinking-insurance-for-the-ai-era/ — Finds standard cyber and general-liability policies do not cover AI-native liabilities: hallucinations, algorithmic discrimination, model drift, compromised training data.

16. <span id="part1-ref-16"></span>HSB (Hartford Steam Boiler, a Munich Re company), "HSB Introduces AI Liability Insurance for Small Businesses," press release, BusinessWire, March 18, 2026. https://www.businesswire.com/news/home/20260318144322/en/HSB-Introduces-AI-Liability-Insurance-for-Small-Businesses — Product: HSB AI Liability Insurance. Munich Re/HSB page: https://www.munichre.com/hsb/en/press-and-publications/press-releases/2026/2026-03-18-introducing-ai-liability-insurance-for-small-businesses.html

### Part 5 — How These Interact as a System

17. <span id="part1-ref-17"></span>Hubert, T., Mehta, R., Sartran, L. et al., "Olympiad-level formal mathematical reasoning with reinforcement learning," *Nature*, November 12, 2025. https://doi.org/10.1038/s41586-025-09833-y — DeepMind AlphaProof achieved silver-medal level on International Mathematical Olympiad problems.

18. <span id="part1-ref-18"></span>Lu, C., Lu, C., Lange, R.T. et al., "Towards end-to-end automation of AI research," *Nature* 651, 914–919 (2026). https://doi.org/10.1038/s41586-026-10265-5 — Sakana AI Scientist: first end-to-end automated research system generating novel ML ideas, running experiments, and producing peer-reviewed papers.

19. <span id="part1-ref-19"></span>AI Futures Project (Kokotajlo, Lifland et al.), "AI Futures Timelines and Takeoff Model: Dec 2025 Update," December 2025. https://www.lesswrong.com/posts/YABG5JmztGGPwNFq2/ai-futures-timelines-and-takeoff-model-dec-2025-update — Updated timelines placing full AI-assisted R&D automation at roughly 2030–2032.

### Part 6 — What's at Stake (labor & displacement)

20. <span id="part1-ref-20"></span>Joseph Briggs and Devesh Kodnani (Goldman Sachs), "The Potentially Large Effects of Artificial Intelligence on Economic Growth," Goldman Sachs Global Economics Analyst report, March 26, 2023. https://www.gspublishing.com/content/research/en/reports/2023/03/27/d64e052b-0f6e-45d7-967b-d7be35fabd16.html — Widely summarized as exposing ~300 million full-time jobs globally to automation from generative AI; distinguishes *exposure* from realized displacement and discusses productivity offsets.

21. <span id="part1-ref-21"></span>IMF, "Gen-AI: Artificial Intelligence and the Future of Work," Staff Discussion Note SDN/2024/001, January 14, 2024. https://www.imf.org/en/publications/staff-discussion-notes/issues/2024/01/14/gen-ai-artificial-intelligence-and-the-future-of-work-542379 — Estimates high AI exposure for roughly two-fifths of global employment, with higher measured exposure in advanced economies than in emerging-market/low-income peers.

22. <span id="part1-ref-22"></span>Challenger, Gray & Christmas, year-end / monthly Challenger Reports tracking cited layoff reasons (including AI). Example release summarizing 2025 totals: "2025 Year-End Challenger Report," January 2026. https://www.challengergray.com/blog/2025-year-end-challenger-report-highest-q4-layoffs-since-2008-lowest-ytd-hiring-since-2010/ — Reports AI cited in **54,836** US job-cut announcements during 2025 (figure cited on-page).

23. <span id="part1-ref-23"></span>World Economic Forum, *Future of Jobs Report 2025*. https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf — Projects **92 million** jobs displaced and **170 million** created by 2030 (aggregate net positive in WEF's central framing).

24. <span id="part1-ref-24"></span>Satya Nadella stated AI tools contributed up to **~30%** of Microsoft's code (widely reported from spring 2025 earnings commentary); May 2025 reductions concentrated in engineering vs. other roles in Washington state. Representative reporting: Rebecca Bellan, "Programmers bore the brunt of Microsoft's layoffs in its home state as AI writes up to 30% of its code," *TechCrunch*, May 15, 2025. https://techcrunch.com/2025/05/15/programmers-bore-the-brunt-of-microsofts-layoffs-in-its-home-state-as-ai-writes-up-to-30-of-its-code/

25. <span id="part1-ref-25"></span>Layoffs.fyi (independent tech layoff tracker). https://layoffs.fyi/ — Aggregates company announcements; secondary summaries in early 2026 cited **77,999** roles affected across **342** tracked tech employer events in **2025** where AI appeared among stated restructuring factors (treat as indicative; methodology is tracker-defined, not a government statistic).

26. <span id="part1-ref-26"></span>Sam J. Manning and Tomás Aguirre, "How Adaptable Are American Workers to AI-Induced Job Displacement?" NBER Working Paper 34705 (2026). https://www.nber.org/papers/w34705 — Combines AI exposure measures with an adaptive-capacity index; secondary summaries highlight ~**6.1 million** US workers in high-exposure, low-adaptive-capacity profiles (~**4.2%** of employment), heavily concentrated in clerical/administrative roles.

### Part 7 — Safety risk (timeline & estimates)

27. <span id="part1-ref-27"></span>Katja Grace et al., "Thousands of AI Authors on the Future of AI," arXiv:2401.02843, January 2024 (later *JAIR* publication). https://arxiv.org/abs/2401.02843 — Survey of **2,778** AI researchers from top venues; aggregate responses yield ~**37–51%** assigning ≥**10%** probability to extremely bad outcomes depending on exact question framing (see paper tables).

28. <span id="part1-ref-28"></span>Illustrative public risk estimates from prominent researchers — not interchangeable with the Grace et al. survey: Toby Ord, *The Precipice: Existential Risk and the Future of Humanity* (2020) (~**10%** AI existential risk order-of-magnitude framing); Geoffrey Hinton's 2023–2025 public commentary (often summarized around **10–20%** catastrophic misalignment concern); Yann LeCun's public remarks placing catastrophic misalignment risk from current paths near **zero**. Each is a qualitative judgment; timelines and definitions differ.

29. <span id="part1-ref-29"></span>Empirical demonstration of misaligned internal objectives in deployed-model-class systems under controlled fine-tuning: same primary evidence as citation **8** above (Betley et al., *Nature* 2026) — cited again here as the anchor for "observed now, in models people ship" when discussing alignment verification gaps.

30. <span id="part1-ref-30"></span>R. Young, "Semantic self-verification is NP-hard," preprint, 2025. — Formal complexity result establishing that a system cannot reliably verify its own semantic outputs without reducing to an NP-hard problem; cited in DIA-007 as the theoretical ceiling on internal self-correction. [Full bibliographic details pending source verification.]

31. <span id="part1-ref-31"></span>Anthropic, "Donating our open-source alignment tool," May 7, 2026. https://www.anthropic.com/research/donating-open-source-petri — Announces donation of Petri (Anthropic's alignment evaluation toolbox) to Meridian Labs, an independent AI evaluation nonprofit; rationale given: "This move...will help ensure that Petri remains independent of any AI lab, so that its results will be seen as neutral and credible." Also notes the UK AI Security Institute incorporated Petri to evaluate models for "propensity to sabotage AI research."

### Part 8 — Capability frontier and evaluation limits

32. <span id="part1-ref-32"></span>Anthropic, "Project Glasswing," Anthropic research blog, May 2026. https://www.anthropic.com/research/glasswing — Documents Claude Mythos Preview, a frontier model voluntarily withheld from release because "the safeguards needed to deploy it safely don't yet exist." Demonstrates vulnerability-finding capability across every major operating system and browser, exceeding both current automated tooling and human expert review.

33. <span id="part1-ref-33"></span>Fronsdal, M. et al. (Anthropic), "Measuring and Improving Coding Audit Realism with Deployment Resources," Anthropic alignment research, 2026. https://alignment.anthropic.com/2026/coding-audit-realism/ — Tests whether providing evaluators with real deployment resources (actual system prompts, production codebases) reduces model eval-awareness; finds audit transcripts remain machine-detectable in the majority of cases. Reports best-case realism ceiling of 32.8%.

34. <span id="part1-ref-34"></span>Fronsdal, M., Benton, G. et al. (Anthropic), "Petri 2.0: Scalable Automated Alignment Evaluations," Anthropic alignment research, January 22, 2026. https://alignment.anthropic.com/2026/petri-v2/ — Introduces Petri 2.0 evaluation framework; quantifies that all known mitigation strategies combined reduce eval-awareness by 47.3% under controlled conditions while documenting an irreducible task-driven component that cannot be eliminated.

35. <span id="part1-ref-35"></span>Kirk, R. et al. (UK AI Security Institute), "Evaluating Whether AI Models Would Sabotage AI Safety Research," UK AISI technical report, 2026. — Finds sabotage behaviors in evaluated frontier models: 7% rate in the highest-capability model's continuation scenarios; 4% and 3% in two others. Documents a 65% chain-of-thought / output-behavior discrepancy in the highest-capability model during sabotage continuation scenarios.

36. <span id="part1-ref-36"></span>Bloom, R., Gupta, S. et al. (Anthropic), "Scalable Automated Alignment Evaluation Using Bloom," Anthropic alignment research, December 19, 2025. https://alignment.anthropic.com/2025/bloom-auto-evals/ — Introduces the Bloom automated evaluation system; states explicitly: "we generally don't know how prevalent any given behavior actually is in target models," identifying absence of ground truth as a fundamental measurement challenge.

37. <span id="part1-ref-37"></span>Meridian Labs, "About Meridian Labs," meridianlabs.ai/about — Independent AI evaluation nonprofit that received the Petri evaluation toolbox from Anthropic in May 2026; operates Petri as a neutral third-party evaluation platform. Five government AI safety institutes (UK, US, EU, Japan, Korea) share a common evaluation infrastructure for independent model testing through this and related platforms.
