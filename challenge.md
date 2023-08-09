---
title:
feature_text: |
feature_image: "/assets/logos/banner_white_with_slogan.png"
excerpt:
---

## 참가자격

'23년 8월 현재 대학 및 대학원 재학생 또는 휴학생(개인 또는 팀으로 참여 가능, 팀 최대 3명)  
※ 1인/팀은 1개 결과물만 제출 가능

## 문제 설명

문제에서 제시한 LLM과 데이터셋 그리고 기반이 되는 프레임워크를 활용하여 높은 정확도(Accuracy)를 유지하면서 추론 시간(latency time)을 최소화하는 것이 목표입니다. 대회 참여자들은 추론 시간 최소화를 위해 여러 가지 최적화 방법 및 알고리즘을 적용시킬 수 있습니다. 대회 제약사항 및 각 라운드에서 요구하는 사항은 아래를 참조하세요.

### 허용 모델

대회의 베이스 모델(base model)은 instruction tuning이 없는 오픈 베이스 모델인 **LLaMA-30B**입니다. LLaMA 모델의 사용을 위해 다음 [LLaMA-1 community license agreement](https://github.com/facebookresearch/llama/blob/main/LICENSE "LLaMA community license agreement")을 확인하고 커뮤니티에 라이센스 요청을 해야 합니다. [download link](https://docs.google.com/forms/d/e/1FAIpQLSfqNECQnMkycAp2jP4Z9TFX0cGR4uf7b_fBxjY_OjhJILlKGA/viewform "download link")를 참고하여 진행하세요.

### 데이터셋

대회에서 허용되는 데이터셋은 [Hellaswag](https://huggingface.co/datasets/hellaswag) 입니다. 해당 데이터셋을 사용한 추론만 허용되며, 다른 데이터셋은 허용되지 않습니다.

### 프레임워크

최적화를 위해 사용 할 딥러닝 프레임워크는 파이토치 버전 2.0입니다. 다음 [link](https://github.com/pytorch/pytorch/tree/v2.0.0)를 참고하시기 바랍니다. 또한, 파이토치 2.0 기반의 프레임워크도 사용하실 수 있습니다. (예시: fast-transformer)

### 제약사항

 1. 모델의 정확도를 현저하게 떨어트리는 조정 및 미세 조정(re-training)은 금지합니다.  
 2. 최적화 및 알고리즘 적용으로 인해 생기는 약간의 Accuracy Drop은 허용합니다. (허용범위 : ~x%)  
 3. 제시한 데이터셋 이외에 다른 데이터 사용은 금지합니다.  
 4. 적절한 출처를 제공한다면 오픈 소스 코드와 라이브러리 사용은 허용합니다.

※ 이외의 다른 규칙은 Rules를 참고해주세요.

### 라운드 진행 및 평가

이번 대회에서는 총 2번의 라운드가 진행됩니다.

#### 1차 라운드  

대회의 첫 번째 라운드는 참가자가 로컬 머신 환경에서 주어진 모델과 데이터 세트를 실행하고 주어진 환경 내에서 가능한 최적화 및 알고리즘을 적용하는 것을 목표로 합니다. 1차 라운드는 참가자의 기술 문서(레포트) 및 소스코드를 기반으로 정성적 평가를 진행합니다. 1차 평가가 끝나면 상위 10개 팀이 선정됩니다.

##### 1차 평가 제출물
<br>
 1. 참가자 사용한 최적화 방법과 알고리즘을 설명하는 문서. (**pdf**와 **docs** 두 가지 형식만 허용합니다)  
 2. 수정한 프레임워크 및 작성한 소스 코드가 포함된 Github URL.

위 두 가지 항목을 Submission의 google form으로 제출해야 합니다.

#### 2차 라운드  
2차 라운드는 정량적 평가로, **동일한 서버 환경** 내에서 가장 빠른 추론 시간을 달성하는 것을 목표로 합니다. 주어진 서버 환경은 다음과 같습니다.  
 * OS: Ubuntu 18.04 64-bit  
 * Number of vCPU core : 32  
 * Storage : SSD 1TB  
 * RAM : 360GB  
 * GPU : NVIDIA Tesla V100 Model 4EA  
  * Total GPU Memory : 128GB  
  * Supports NVLink

##### 2차 평가 제출물

2차 라운드도 Submission에 주어진 Google form을 통해 제출하며, 모델 추론을 수행한 결과물인 **추론 시간(inference time)**을 제출합니다. 2차 라운드 기간 동안 **LeaderBoard**가 운영 될 예정이며, 매일 **아침 10시**에 업데이트 됩니다. 여러 번 제출한 경우 마지막으로 제출한 점수를 기준으로 등록됩니다.

###### 주의 사항

※ LeaderBoard에 표시된 순위표는 다른 팀의 결과를 공유하기 위한 수단일 뿐입니다.  
※ 대회 참가자들은 2차 라운드가 끝나기 전, 수정한 소스 코드 및 프레임워크가 포함된 Github URL을 제출해야 합니다.
※ 최종 순위는 여러 가지 평가 기준을 통해 최종 결정됩니다.

## Qualifications

To participate in this competition, You must meet the following Qualifications criteria  
 1. Be enrolled in college or graduate school as of August '23, or be on a leave of absence  
 2. Participate as an individual or as a team, with a maximum of 3 people per team  
  (A person/team can only submit 1 deliverable)  

## Competition description

The goal is to minimize latency while maintaining high accuracy using the LLM and the dataset and underlying framework presented in the problem. Contestants can apply various optimization methods and algorithms to minimize inference time. See below for the competition constraints and requirements for each round.

### Approved Base model:

The competition base model is the **LLaMA-30B**, an open base model with no instruction tuning. To use the LLaMA model, you need to check the following [LLaMA-1 Community License Agreement](https://github.com/facebookresearch/llama/blob/main/LICENSE "LLaMA Community License Agreement") and request a license from the community. Please refer to the [Download Link](https://docs.google.com/forms/d/e/1FAIpQLSfqNECQnMkycAp2jP4Z9TFX0cGR4uf7b_fBxjY_OjhJILlKGA/viewform/ "Download Link") to proceed.

### Datasets:

The dataset we accept in the competition is [Hellaswag](https://huggingface.co/datasets/hellaswag). We only accept inferences made using that dataset, and no other datasets.

### Framework:

The deep learning framework we will use for optimization is Pytorch version 2.0. Please refer to the following [link](https://github.com/pytorch/pytorch/tree/v2.0.0). We also accept frameworks based on pytorch 2.0. (ex. fast-transformer)

### Constraints

 1. prohibit adjustments and fine-tuning (retraining) that significantly reduce the accuracy of the model.  
 2. allow a slight degradation of accuracy due to optimization and algorithmic adaptation (tolerance range: ~x%)  
 3. prohibit the use of data other than the provided dataset.  
 4. Use of open source code and libraries is allowed if proper credit is given.

For other rules, see Rules.

### Evaluation:

There are two rounds to this challenge.

##### Primary

The first round of the competition aims for participants to run the given model and dataset in their local machine environment and apply possible optimizations and algorithms within the given environment. The first round is a qualitative evaluation based on participants' technical documentation (reports) and source code. At the end of the first round of evaluation, the top 10 teams will be selected.

###### First round assessment submissions

 1. Documentation describing the optimization methods and algorithms used by participants. (only accepts two formats: **pdf** and **doc**)  
 2. A github url containing the framework and source code that you modified.

Make sure you submit the above two items in the **submission**

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

The second round is also submitted via the Google form provided in **submission**, and requires you to submit your **inference time**, which is the result of performing inferences on your model. During second round, a **leaderboard** will be running and will be updated daily at **10:00 am(KST)**. If you submit multiple times, you will be ranked based on the score of your last submission.

###### Cautions

※ The leaderboard is just a way to share other teams' results.  
※ Participants must submit a Github URL containing their modified source code and  framework before the end of Round 2.  
※ Final rankings will be determined based on multiple evaluation criteria.