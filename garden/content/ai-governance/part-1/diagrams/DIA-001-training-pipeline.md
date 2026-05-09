# DIA-001: Training pipeline from data to inference
## Snapshot
- **Diagram file:** `garden/content/ai-governance/part-1/diagrams/DIA-001-training-pipeline.svg`
- **Theme:** Training economics and feedback loops
- **Primary audience takeaway:** The picture traces a staged pipeline where costly training runs yield reusable model artifacts, then user outputs feed back into the next cycle.

## What The Diagram Shows
Five stage pills run left to right: collect, filter and label, training adjustments, model result, user inference. The flow starts with internet-scale text, compresses into curated training data, and lands in a persistent model file used at prompt time. Then the dashed arc bends back from user outputs toward earlier stages, labeled as a reinforcing loop rather than a closed endpoint. Inference appears as a moment in the cycle, not the finish line.

## Elements And Flow
- **Components:**
  - The Internet (source corpus)
  - Training Data (cleaned and curated set)
  - Training Run (compute-intensive optimization stage)
  - The Model (~100B numbers, persistent artifact)
  - Your Prompt (inference-time usage)
- **Relationships:**
  - Solid arrows connect each stage in sequence from left to right
  - A dashed curved arrow returns from prompt outcomes to earlier stages
  - The feedback path is explicitly marked as a reinforcing loop (R1)
- **Notable labels or metrics:**
  - "trillions of words"
  - "billions of tiny adjustments"
  - "weeks · millions of $"
  - "~$100M-$1B per run"
  - "N-1 model -> trains N"
  - "recoups training cost"

## How To Read It
1. Start with the stage pills to lock in the five-step order.
2. Read the first three boxes as a conversion from raw corpus to tuned parameters.
3. Pause at `TRAINING RUN` for the cost and duration anchors.
4. Separate the durable model artifact from the one-off prompt interaction.
5. End on the dashed return path to see where deployment behavior re-enters training.

## Governance Relevance
Governance leverage appears at the concrete junctions this diagram names: sourcing, curation, training oversight, and post-deployment review. That matters because prompts and outputs are not isolated events here. The feedback loop sends downstream behavior upstream into later runs, so audit evidence and accountability records need to travel with the whole lifecycle, not only a release moment.

## Suggested Caption
DIA-001 follows internet-scale data into costly training and inference, then shows outputs feeding back into the next model cycle.
