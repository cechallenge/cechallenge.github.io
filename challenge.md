---
title: Challenge
feature_text: |
feature_image: "/assets/logos/banner_white_with_slogan.png"
excerpt:
---

To participate in this competition, You must meet the following eligibility criteria

 1. Be enrolled in college or graduate school as of August '23, or be on a leave of absence  
 2. Participate as an individual or as a team, with a maximum of 3 people per team(A person/team can only submit 1 deliverable)  

## Competition description

TODO

### Approved Base model:

The starting model for the competition should be an open base model without instruction-tuning. Examples of licenses we’ll accept are [MIT](https://spdx.org/licenses/MIT.html "MIT"), [Apache 2](https://www.apache.org/licenses/LICENSE-2.0 "Apache 2"), [BigScience RAIL](https://bigscience.huggingface.co/blog/the-bigscience-rail-license "BigScience RAIL"). We’re also happy to discuss other licenses on a case by case basis, for example per community interest we’ll accept the [LLAMA-1 community license agreement](https://github.com/facebookresearch/llama/blob/main/LICENSE "LLAMA community license agreement") if you’ve requested and been approved for a [download link](https://docs.google.com/forms/d/e/1FAIpQLSfqNECQnMkycAp2jP4Z9TFX0cGR4uf7b_fBxjY_OjhJILlKGA/viewform/ "download link").

The model we allow in the competition is the LLaMa-30B. No other models are allowed. And, a small drop in accuracy due to optimization is acceptable. (e.g. kernel fusion) The **tolerance is > ~0.5%**.

### Datasets:

The dataset we accept in the competition is [Hellaswag](https://huggingface.co/datasets/hellaswag). We only accept inferences made using that dataset, and no other datasets.

### Framework:
The deep learning framework we will use for optimization is Pytorch version 2.0. Please refer to the following [link](https://github.com/pytorch/pytorch/tree/v2.0.0). We also accept frameworks based on pytorch 2.0. (ex. fast-transformer)

### Evaluation:

There are two rounds to this challenge.

##### Primary

The evaluation of the first round of the competition will be qualitative, with participants running the given model and dataset on their local machine environment and applying the optimizations and algorithms they can within the given environment. After the first round of evaluation, the top 10 teams will be selected.

###### First round assessment submissions

 1. Documentation describing the optimization methods and algorithms used by participants. (only accepts two formats: **pdf** and **doc**)  
 2. A github url containing the framework and source code that you modified.

Make sure you submit the above two items in the **submission** format.

##### Second

The second round of the competition is a quantitative evaluation, with the goal of achieving the fastest inference time within the **same given server environment**. The given server environment looks like this.

 * OS: Ubuntu 18.04 64-bit  
 * Number of vCPU core : 32  
 * Storage : SSD 1TB  
 * RAM : 360GB  
 * GPU : NVIDIA Tesla V100 Model 4EA  
  * Total GPU Memory : 128GB  
  * Supports NVLink

###### Second round assessment submissions

The second round is also submitted via the **Submission** format, and submits the **inference time** from the model inference. We will be running a **leaderboard** on this page which will be updated every morning at **xx hours** for the duration of the second round. If you submit multiple times, you will be registered based on the last submitted Score. The leaderboard is just a way to share the results of other teams. The final evaluation will be based on the submissions, which we will run ourselves and review for feasibility. The top four teams will be selected through a second round of evaluation.