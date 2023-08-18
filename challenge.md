---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2023
  ## No system, No AI: Let's Play with LLM!
feature_image: "/assets/logos/banner_last.png"
excerpt:
---

## 참가자격

 1. '23년 8월 현재 대학 및 대학원 재학생 또는 휴학생  
 2. 개인 또는 팀으로 참여 가능하며, 팀당 최대 3명까지 구성 할 수 있습니다.  
  (개인/팀은 1개 결과물만 제출 가능)

## 문제 설명

문제에서 제시한 LLM과 데이터셋 그리고 기반이 되는 프레임워크를 활용하여 높은 정확도(Accuracy)를 유지하면서 Latecny를 최소화하는 것이 목표입니다. 대회 참여자들은 추론 시간 최소화를 위해 여러 가지 최적화 방법 및 알고리즘을 적용시킬 수 있습니다. 대회 각 라운드에서 요구사항 및 제약사항은 아래를 참조하세요.

### 허용 모델

대회의 베이스 모델(base model)은 instruction tuning이 없는 오픈 베이스 모델인 **LLaMA-30B**입니다. LLaMA 모델의 사용을 위해 다음 <a target="_blank" href="https://github.com/facebookresearch/llama/blob/main/LICENSE">LLaMA-1 Community License Agreement</a>을 확인하고 커뮤니티에 라이센스 요청을 해야 합니다. <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfqNECQnMkycAp2jP4Z9TFX0cGR4uf7b_fBxjY_OjhJILlKGA/viewform">Download Link</a>를 참고하여 진행하세요.

### 데이터셋

대회에서 허용되는 데이터셋은 <a target="_blank" href="https://huggingface.co/datasets/hellaswag">HellaSwag</a>입니다. 해당 데이터셋을 사용한 추론만 허용되며, 다른 데이터셋은 허용되지 않습니다.

### 프레임워크

최적화를 위해 사용 할 딥러닝 프레임워크는 PyTorch 2.0입니다. 다음 <a target="_blank" href="https://github.com/pytorch/pytorch/tree/v2.0.0">link</a>를 참고하시기 바랍니다. 또한, PyTorch 2.0 기반의 프레임워크도 사용하실 수 있습니다. (예시: FasterTransformer)

### 제약사항

 1. 모델의 정확도를 현저하게 떨어트리는 조정 및 미세 조정(re-training)은 금지합니다.  
 2. 최적화 및 알고리즘 적용으로 인해 생기는 약간의 accuracy drop은 허용합니다.  
 3. 제시한 데이터셋 이외에 다른 데이터 사용은 금지합니다.  
 4. 적절한 출처를 제공한다면 오픈 소스 코드와 라이브러리 사용은 허용합니다.

※ 이외의 다른 규칙은 [**Rules**](https://cechallenge.github.io/rules/)를 참고해주세요.

### 라운드 진행 및 평가

이번 대회에서는 총 2번의 라운드가 진행됩니다.

#### 1차 라운드  

대회의 첫 번째 라운드는 참가자의 로컬 머신 환경에서 제시한 모델과 데이터셋을 실행하고 주어진 환경 내에서 가능한 최적화 및 알고리즘을 적용하는 것을 목표로 합니다. 1차 라운드는 참가자의 기술 문서(레포트) 및 소스코드를 기반으로 정성적 평가를 진행합니다. 1차 평가가 끝나면 상위 10개 팀이 선정됩니다.

##### 1차 평가 제출물

 1. 문제 해결을 위해 사용한 최적화 방법과 알고리즘을 설명하는 문서. (**docs** 또는 **pdf** 형식)  
 2. 수정한 프레임워크 및 작성한 소스 코드가 포함된 GitHub URL.

위 두 가지 항목을 [**Submission**](https://cechallenge.github.io/submission/)으로 제출해야 합니다.

#### 2차 라운드

2차 라운드는 정량적 평가로, **동일한 서버 환경** 내에서 가장 빠른 추론 시간을 달성하는 것을 목표로 합니다. 주어진 서버 환경은 다음과 같습니다.  
 * OS: Ubuntu 18.04 64-bit  
 * Number of vCPU core : 32  
 * Storage : SSD 1TB  
 * RAM : 360GB  
 * GPU : NVIDIA Tesla V100 Model 4EA  
  * Total GPU Memory : 128GB  
  * Supports NVLink  

참가자는 2차 라운드가 진행되는 동안 주어진 서버에서 모델 추론(inference)을 진행하고, 추론 시간(inference time)을 다음 이메일(**cechallenge@samsung.com**)주소로 제출해야 합니다. 2차 라운드 기간 동안 [**Leaderboard**](https://cechallenge.github.io/leaderboard/)가 운영 될 예정이며, 매일 **오전 10시(KST)**에 업데이트 됩니다. 여러 번 제출한 경우 마지막으로 제출한 내용을 기준으로 등록됩니다.

##### 2차 평가 제출물

 1. 문제 해결을 위해 사용한 최적화 방법과 알고리즘을 설명하는 문서. (**docs** 또는 **pdf** 형식)  
 2. 수정한 프레임워크 및 작성한 소스 코드가 포함된 GitHub URL.  
 3. 추론 시간  

2차 라운드가 종료되기 전, 위 세 가지 항목을 [**Submission**](https://cechallenge.github.io/submission/)으로 제출해야 합니다.  

###### 주의 사항

※ Leaderboard에 표시된 순위표는 다른 팀의 결과를 공유하기 위한 수단일 뿐입니다.  
※ 최종 순위는 여러 가지 평가 기준을 통해 최종 결정됩니다.

<hr />

## Qualifications

To participate in this competition, You must meet the following qualifications criteria.  
 1. Be enrolled in college or graduate school as of August '23, or be on a leave of absence.  
 2. Participate as an individual or as a team, with a maximum of 3 people per team.  
  (A person/team can only submit 1 deliverable)  

## Competition description

The goal is to minimize latency while maintaining high accuracy using the LLM and the dataset and underlying framework presented in the problem. Participants can apply various optimization methods and algorithms to minimize inference time. See below for the competition constraints and requirements for each round.

### Approved base model

The competition base model is the **LLaMA-30B**, an open base model with no instruction tuning. To use the LLaMA model, you need to check the following <a target="_blank" href="https://github.com/facebookresearch/llama/blob/main/LICENSE">LLaMA-1 Community License Agreement</a> and request a license from the community. Please refer to the <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfqNECQnMkycAp2jP4Z9TFX0cGR4uf7b_fBxjY_OjhJILlKGA/viewform">Download Link</a> to proceed.

### Datasets

The dataset we accept in the competition is <a target="_blank" href="https://huggingface.co/datasets/hellaswag">HellaSwag</a>. We only accept inferences made using that dataset, and no other datasets.

### Framework

The deep learning framework we will use for optimization is PyTorch 2.0. Please refer to the following <a target="_blank" href="https://github.com/pytorch/pytorch/tree/v2.0.0">link</a>. We also accept frameworks based on PyTorch 2.0. (ex. FasterTransformer)

### Constraints

 1. Prohibit adjustments and fine-tuning (re-training) that significantly reduce the accuracy of the model.  
 2. Allow a slight degradation of accuracy due to optimization and algorithmic adaptation.  
 3. Prohibit the use of data other than the provided dataset.  
 4. Use of open source code and libraries is allowed if proper credit is given.

For other rules, please see the [**Rules**](https://cechallenge.github.io/rules/) page.

### Evaluation

There are two rounds to this challenge.

##### Primary

The first round of the competition aims for participants to run the given model and dataset in their local machine environment and apply possible optimizations and algorithms within the given environment. The first round is a qualitative evaluation based on participants' technical documentation (reports) and source code. At the end of the first round of evaluation, the top 10 teams will be selected.

###### First round assessment submissions

 1. Documentation describing the optimization methods and algorithms used by participants. (**docs** or **pdf** format)  
 2. A GitBub URL containing the framework and source code that you modified.

Make sure you submit the above two items in the [**Submission.**](https://cechallenge.github.io/submission/)

##### Second

The second round of the competition is a quantitative evaluation, with the goal of achieving the fastest inference time within the **same given server environment**. The given server environment looks like this.

 * OS: Ubuntu 18.04 64-bit  
 * Number of vCPU core : 32  
 * Storage : SSD 1TB  
 * RAM : 360GB  
 * GPU : NVIDIA Tesla V100 Model 4EA  
  * Total GPU Memory : 128GB  
  * Supports NVLink

Participants proceed with model inference on a given server during the second round and submit the inference time to the e-mail address(**cechallenge@samsung.com**). The leaderboard runs in two rounds and is updated at **10 a.m.(KST)** every day. If you submit it several times, it will be registered based on the last submission.

###### Second round assessment submissions

 1. Documentation describing the optimization methods and algorithms used by participants. (**docs** or **pdf** format)  
 2. A GitBub URL containing the framework and source code that you modified.  
 3. Inference time

Before the end of second round, Make sure you submit the above three items in the [**Submission.**](https://cechallenge.github.io/submission/)

###### Cautions

※ The Leaderboard is just a way to share other teams' results.  
※ Final rankings will be determined based on multiple evaluation criteria.
