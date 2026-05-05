---
title: "What's Actually at Stake"
tags: [ai, governance, systems-thinking]
draft: false
---

*Part 7 of 8*

*The loops described so far produce specific effects on real people. This section grounds those effects in the best available evidence — and is honest about where the evidence gets thin.*

The structural answer to the central question — can AI companies be trusted to self-govern? — is: **not reliably, and not because the people are uniquely reckless.** The loop structure doesn't support it. The fast loop (capability → capital → compute) is strong. The slow loop (harm → oversight → slowdown) has multi-year delays, is under-resourced, and has been weakened further since 2025. The system's behavior is governed by the fast loop regardless of stated intentions. That is a structural observation. It has two concrete effects on real people: displacement and, less certainly, safety risk. Both are worth examining carefully.

### What critics would say — and what the system says back

Four objections to this analysis come up often. Each one has something real underneath it. Here's what the loop structure says back — not to dismiss the concern, but because looking at each one reveals something useful about how the system actually works.

<div class="tier-grid">

<div class="tier-card">
<p><strong>The objection</strong></p>
<p><em>"This is catastrophizing. Pessimists about technology have always been wrong."</em></p>
<p><strong>What the structure says</strong></p>
<p>This analysis isn't a prediction about outcomes. It's an observation about current loop structure. Whether the fast loop stays faster than the slow loop is a testable, observable question. The claim isn't "disaster is coming." It's "the current setup doesn't self-correct fast enough to catch its own failure modes." That's falsifiable: watch whether oversight resources grow proportionally to industry scale over the next two years. If they do, the structural argument weakens.</p>
</div>

<div class="tier-card">
<p><strong>The objection</strong></p>
<p><em>"AI creates more jobs than it destroys. Net job creation will prove the critics wrong."</em></p>
<p><strong>What the structure says</strong></p>
<p>Probably true in aggregate, over a long enough window. The WEF projects net positive job creation — this analysis takes that seriously. But aggregate creation and concentrated harm are not the same thing. The 5-6 million workers identified at high exposure and low adaptive capacity don't benefit from the national average. They're caught between a fast loop (displacement) and a slow loop (retraining infrastructure) that runs years behind. The aggregate number is the wrong unit of measurement for that group.</p>
</div>

<div class="tier-card">
<p><strong>The objection</strong></p>
<p><em>"Labs genuinely care about safety. Their alignment research teams prove it."</em></p>
<p><strong>What the structure says</strong></p>
<p>True, and it matters. Anthropic, OpenAI, and DeepMind all have genuine safety teams doing real work. The structural claim here is different: good intentions inside a reinforcing loop don't change how the loop behaves. A lab that wants to slow down but whose investors require continued growth faces a structural constraint that operates regardless of what its researchers want. That's what it means for behavior to be governed by the fast loop. The people aren't the problem. The loop is.</p>
</div>

<div class="tier-card">
<p><strong>The objection</strong></p>
<p><em>"Open-source AI puts power in more hands. That's democratizing, which is good."</em></p>
<p><strong>What the structure says</strong></p>
<p>Open-source does broaden access, and that's real. But "democratizing" implies power flowing to individuals and communities. What the constraint table shows is different: released model weights are irreversible. The open release permanently adds capability to the world, and who benefits from that depends on who already has the infrastructure to use it. Organizations, states, and well-funded groups benefit more from free capability than individuals do. "Democratizing" is accurate about access. It's less accurate about power distribution.</p>
</div>

</div>

### The labor displacement picture

Mass displacement isn't a forecast — it's already occurring in specific sectors. The honest account requires distinguishing between technical exposure and actual job loss.

The most-cited figure — Goldman Sachs' estimate of 300 million jobs globally "exposed" to AI — is also the most misread. "Exposed" means tasks that *could* be automated, not jobs that will be eliminated. Goldman's own base case is 6–7% actual displacement over ten years. That gap between the headline and the base case is where most public coverage goes wrong.

The IMF's April 2025 analysis is more granular: 40% of global employment has meaningful AI exposure, rising to 60% in advanced economies. The key finding is the split within that 60% — roughly half face genuine task substitution, while the other half stand to benefit from AI-assisted productivity gains. Displacement and augmentation are happening inside the same sectors, sometimes the same roles.

What's been measured so far: the Bureau of Labor Statistics attributed ~54,694 US job losses directly to AI in 2025, while independent analysts estimate 200,000–355,000 when foregone hiring is included. The software sector alone saw 77,999 layoffs across 342 events. Concentrated, real, and accelerating — but not yet economy-wide.

The WEF's 2025 Future of Jobs Report projects 92 million jobs displaced and 170 million created by 2030 — net positive on paper. The catch is distribution. New jobs don't align with displaced workers by skill, geography, or wage level. The first industrial revolution grew UK productivity significantly while wages stagnated for 40 years. The internet transition generated genuine replacement employment, but took 20–30 years. AI's pace may outrun any natural transition timeline.

The population most at risk is specific: NBER research identified roughly 3.9% of US workers — 5–6 million people — at the intersection of high AI exposure and low adaptive capacity: older workers, lower-income brackets, geographic concentrations in single-industry areas. For them, displacement isn't a career setback. It's closer to permanent.

> [!key] The redistribution mechanism is missing
> Historical technology transitions redistributed productivity gains through specific mechanisms: labor organizing, collective bargaining, wage growth, shorter working hours, progressive taxation. These mechanisms don't fire automatically for AI-driven displacement. Denmark's "flexicurity" model — generous retraining support (up to 2 years, ~70–80% wage replacement) plus mandatory active job placement — is the clearest working example of a deliberate goal-change for displaced workers. It requires spending over 5% of GDP on labor market programs. The EU AI Act (Article 26) requires employer consultation before deploying high-risk AI in employment contexts. The US has no equivalent federal provision as of May 2026.

### The safety risk picture

This concern is often presented in ways that obscure rather than clarify. The risk isn't that today's AI tools — the ones people use to draft emails, summarize documents, or generate images — will harm anyone directly. The concern involves a specific future scenario and a specific technical problem.

The technical problem: current training processes don't reliably produce systems that pursue exactly the objectives we intend. Models learn to produce outputs that score well on the metrics used during training — which is not quite the same thing as learning the underlying goal. At today's capability levels, this gap is mostly a nuisance (models say confident wrong things, over-optimize for approval). At substantially higher capability levels — systems that can pursue complex multi-step goals more effectively than humans — the same gap becomes harder to reverse. This is what researchers mean by alignment risk. It's not about malice. It's about optimization toward subtly miscalibrated objectives.

The timeline is genuinely contested. In 2024, a survey of 2,778 AI researchers found that 37–51% estimated at least a 10% probability of catastrophic outcomes from advanced AI. Toby Ord (Oxford) estimates ~10%; Geoffrey Hinton 10–20%; Yann LeCun estimates effectively zero. These are not fringe positions in either direction. The researchers closest to the work disagree substantially on whether the risk is near-term (2030s), longer-horizon (2040s+), or primarily theoretical. What is documented now: inner misalignment has been empirically observed in current models, and interpretability tools — the research that would let us verify what a model is actually optimizing for — are not yet tractable at frontier scale. The gap between capability and verification has been growing, not closing.

The proximate actors for this risk are not the general public. They are the engineers designing training procedures, the lab leadership setting deployment timelines, the policymakers deciding what mandatory safety evaluations look like, and the researchers doing interpretability work. The public's role is indirect: funding these labs through products and investment, and creating (or not) the political conditions for binding oversight. That's a real role. It's just not the same as direct exposure.

> [!tip] What each risk requires you to hold differently
> Labor displacement is happening now, is measurable, and has well-understood precedents for what makes transitions less catastrophic. The question is political will and redistribution mechanisms. Safety risk involves longer timelines, genuinely contested probability estimates, and failure modes that serious researchers disagree about by orders of magnitude. Both risks share one structural property: the feedback delay between action and consequence means that interventions need to precede the harms, not follow them. For displacement, that window is closing. For safety, it depends on how fast capability advances relative to verification research.

### Binding constraints table

| Binding Constraint | Current State | Who Controls It |
|--------------------|---------------|-----------------|
| **Electricity grid** | IEA: AI data center electricity up 50% in 2025. PJM's December 2025 capacity auction failed — 6,625 MW short; capacity prices up ~10× in one year. 94% of PJM's projected load growth from data centers. Average grid interconnection wait: 7 years in Northern Virginia. | FERC, state utility commissions — real enforcement power, no AI mandate |
| **Chip supply** | TSMC fabricates the large majority of leading-edge AI chips. ASML has a 100% monopoly on EUV lithography machines. Single-point concentration in the global supply chain. | US export controls, Taiwan geopolitics, trade policy |
| **Product liability** | Garcia v. Character.AI settled January 2026 — no appellate precedent. OpenAI wrongful-death suits: motion to dismiss denied April 2026, proceeding to discovery. Air Canada chatbot case: first concrete liability judgment against AI output. Total fines globally: ~$400K. | Federal and state courts — slow but structurally powerful if liability is established |
| **EU AI Act enforcement** | Penalty structure activates August 2026: €35M or 7% of global turnover for high-risk violations. But only 8 of 27 member states had designated competent authorities by the required deadline. Enforcement capability is structurally unready. | EU Commission and 27 national authorities — enforcement gap is real |
| **Open-weights diffusion** | Permanently exported: DeepSeek-R1 (Jan 2025), Llama 3.x family. Cannot be recalled. Any compute regulation binds on future frontier capability but not on what already exists in the world. | Nobody — this constraint is structurally gone for existing releases |

---

*Next: [[08-where-you-have-leverage|Part 8 — Where You Have Leverage]]*
