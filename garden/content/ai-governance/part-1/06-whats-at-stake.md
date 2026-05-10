---
title: "VI: What's Actually at Stake"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part VI of VIII*

*The loops described so far produce specific effects on real people. This section grounds those effects in the best available evidence, naming where it gets thin.*

Can AI companies be trusted to self-govern? The structural answer is: **not reliably, and not because the people are uniquely reckless.** The fast loop (capability → capital → compute) runs strong. The slow loop (harm → oversight → slowdown) carries multi-year delays, runs under-resourced, and regulators have weakened it further since 2025. When two loops compete, the faster one governs behavior, regardless of stated intentions. That structural fact shows up in two concrete places: displacement and, less certainly, safety risk. This section covers displacement; Part 7 covers safety risk and the binding constraints that currently shape what governance can actually achieve.

### What the AI industry says, and what the structure shows

These aren't fringe positions. Each one is held by serious, well-resourced people and has real evidence behind it. The structural response isn't a rebuttal. It's a different level of analysis. The industry positions describe *what individuals intend*. The structural response describes *how the loop behaves regardless*.

![](/ai-governance/part-1/diagrams/DIA-006A-industry-arguments.svg)

#### Pessimists have always been wrong

<blockquote><p>"AI is math — code — computers, built by people, owned by people, used by people, controlled by people. The idea that it will develop a mind of its own and decide to kill us is a superstitious handwave."</p></blockquote>

<p><em>Marc Andreessen, "Why AI Will Save the World," a16z, Jun 2023. Also: Altman ("the biggest, best, and most important" technology revolution, MIT Sloan, 2023); Amodei (Anthropic, 2024) arguing that unilateral slowdown simply hands the lead to actors with less safety focus.</em></p>

<p><strong>The structural issue isn't the prediction. It's whether the system can catch its own failures.</strong> The claim here isn't "disaster is coming." It's that the current oversight structure doesn't self-correct fast enough, and that's a falsifiable proposition, not a matter of faith. Watch whether oversight resources grow proportionally to industry scale. As of 2026, the US AI Safety Institute had been renamed the Center for AI Standards and Innovation: Commerce dropped "safety" from the name in June 2025. The renamed body was funded at \$10M for FY2026, less than 10% of a single frontier training run.<sup><a href="index#part1-ref-26a" id="part1-fnref-26a">26a</a></sup> Stated concern, mismatched resources.</p>

#### AI creates more jobs than it destroys

<blockquote><p>"AI will create more jobs than it eliminates, just as every previous technology has."</p></blockquote>

<p><em>Marc Benioff, Salesforce, 2025. Also: WEF Future of Jobs Report 2025 (170M new roles, 92M displaced, net +78M by 2030); Microsoft Work Trend Index 2025 documenting growth in AI-augmented roles.</em></p>

<p><strong>The aggregate figure is probably correct, and almost beside the point.</strong> This analysis takes the WEF projection seriously. The problem is distribution and recovery time, both detailed in the labor section below. For workers in the current transition window, that delay isn't a consolation. It's the structural gap that policy either fills or doesn't.</p>

#### Labs genuinely care about safety

<blockquote><p>"The responsible development and maintenance of advanced AI for the long-term benefit of humanity."</p></blockquote>

<p><em>Anthropic mission statement. Also: OpenAI (dedicated alignment, interpretability, and policy teams); Anthropic RSP, previously the industry's gold-standard voluntary safety commitment, until its February 2026 revision.</em></p>

<p><strong>The safety teams are real. The loop is the problem, not the people.</strong> Good intentions inside a self-amplifying system don't change how the system behaves. Section 4 traced this as the dissent paradox: even safety-focused labs cannot hold the line unilaterally if competitors won't. Anthropic's own May 2026 decision to donate its alignment evaluation tool, Petri, to an independent nonprofit makes the same point structurally: evaluations run by a lab on its own models lack the independence required for credibility.<sup><a href="index#part1-ref-31" id="part1-fnref-31">31</a></sup></p>

#### Open-source democratizes AI

<blockquote><p>"I see the danger of this concentration of power through proprietary AI systems as a much bigger danger than everything else."</p></blockquote>

<p><em>Yann LeCun, Lex Fridman Podcast #416, Mar 2024. Also: Zuckerberg ("Open source AI is the path forward," Meta, Jul 2024); Mistral AI positioning open weights as democratic and sovereignty-preserving for non-US nations.</em></p>

<p><strong>The access argument is real. The power argument is more complicated.</strong> Open-source does broaden access, and the sovereignty framing has genuine merit for countries that don't want to depend on US or Chinese infrastructure. But "democratizing" implies power flowing to individuals. Watch what actually happens when model weights are released: they can't be recalled, and who extracts value depends entirely on who already has the infrastructure to use them. Organizations, states, and well-resourced groups consistently benefit more than individuals do. Accurate about access; considerably less accurate about where power actually flows.</p>

### The labor displacement picture

Mass displacement is already occurring in specific sectors. The honest account separates technical exposure from actual job loss.

The most-cited figure, Goldman Sachs' estimate of 300 million jobs globally "exposed" to AI, is also the most misread.<sup><a href="index#part1-ref-20" id="part1-fnref-20">20</a></sup> "Exposed" means tasks that *could* be automated, not jobs that will be eliminated. Goldman's own base case is 6–7% actual displacement of the US workforce over ten years. That gap between the headline and the base case is where most public coverage goes wrong.

The IMF's January 2024 Staff Discussion Note is more granular: 40% of global employment has meaningful AI exposure, rising to 60% in advanced economies.<sup><a href="index#part1-ref-21" id="part1-fnref-21">21</a></sup> Within that 60%, roughly half face genuine task substitution while the other half stand to benefit from AI-assisted productivity gains. Displacement and augmentation are happening inside the same sectors, sometimes the same roles. NBER research published in January 2026 drills further: 6.1 million US workers sit at the intersection of high AI exposure and low adaptive capacity, 4.2% of the workforce, concentrated in clerical and administrative roles, 86% women, and disproportionately located in smaller metro areas where local alternatives are limited.<sup><a href="index#part1-ref-26" id="part1-fnref-26">26</a></sup>

What's been measured so far: Challenger, Gray & Christmas tracked 54,836 US job losses in 2025 where employers cited AI as a direct cause.<sup><a href="index#part1-ref-22" id="part1-fnref-22">22</a></sup> BLS published its first formal methodology for incorporating AI impacts into employment projections in February 2025, applied to the 2023-33 projection cycle through occupational case studies and judgmental adjustments rather than a separate displacement category.<sup><a href="index#part1-ref-26b" id="part1-fnref-26b">26b</a></sup> The tech sector saw 77,999 layoffs across 342 events where AI was cited as a contributing factor, per industry aggregator data.<sup><a href="index#part1-ref-25" id="part1-fnref-25">25</a></sup> Microsoft reported that up to 30% of its code is now AI-written while simultaneously cutting engineering headcount; engineers bore over 40% of its Washington-state layoffs in 2025.<sup><a href="index#part1-ref-24" id="part1-fnref-24">24</a></sup> Concentrated, real, and accelerating. Not yet economy-wide.

The WEF's 2025 Future of Jobs Report projects 92 million jobs displaced and 170 million created by 2030, net positive on paper.<sup><a href="index#part1-ref-23" id="part1-fnref-23">23</a></sup> The catch is distribution. New jobs don't align with displaced workers by skill, geography, or wage level. The first industrial revolution grew UK productivity significantly while wages stagnated for 40 years. The internet transition generated genuine replacement employment, but took 20–30 years to arrive. AI's pace may outrun that window, though how much faster is genuinely contested.

![](/ai-governance/part-1/diagrams/DIA-006B-distribution-problem.svg)

*Part 7 turns to the less certain risk: not the workers displaced now, but what happens if the verification gap between capability and oversight isn't closed before it matters.*

