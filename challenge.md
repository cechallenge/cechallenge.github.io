---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2024
feature_image: "/assets/logos/banner_last.png"
excerpt:
---

#### 참가 자격

 1. '24년 7월 현재 대학 및 대학원 재학생 또는 휴학생  
 2. 개인 또는 팀으로 참여 가능하며, 팀당 최대 3명까지 구성할 수 있습니다.  
  (개인/팀은 1개 결과물만 제출 가능)

#### 문제 설명

Computer Engineering(CE) Challenge는 대규모 언어모델(LLM), 데이터셋 그리고 기반이 되는 프레임워크를 활용하여 높은 정확도(Accuracy)를 유지하면서 Latency를 최소화하는 것을 목표로 합니다.
이번 대회에 참가자들은 추론 시간을 최소화하기 위해 다양한 최적화 방법 및 알고리즘을 적용할 수 있습니다. 그러면서도 정확도를 유지하거나 개선하는 것이 중요합니다.  
참가자분들의 컴퓨터 엔지니어링에 대한 전문 지식과 창의력을 발휘하여 최상의 Latency와 높은 정확도를 달성하기를 기대합니다.

대회 평가기준 및 제약사항은 아래를 참조하세요.


#### 평가 기준
본 대회는 주어진 Device 환경에서 LLM의 Inference를 최소화한 시간을 정량적으로 평가합니다.   
또한, 공지된 Accuracy 대비 drop 제한은 평균 0.5 이내의 감소로 제한됩니다.


#### 대회 운영

최종 평가는 각 팀에서 제출하는 결과물로 사무국에서 선정한 Datast에서 모델 추론을 진행하고, Inference time & Accuracy을 기준으로 평가합니다.  

참가자는 대회가 진행되는 동안 제시된 Device에서 공개된 Dataset으로 모델 추론을 진행하고, Inference time과 Accuracy를 제출해야 합니다.  
제출된 Score를 바탕으로 Leader Board가 운영될 예정이며, **매일 오전 10시(KST)** 에 업데이트 됩니다.  
만약 여러 번 제출하신 경우에는 가장 마지막에 제출된 Score (Inference time & Accuracy)를 기준으로 등록될 예정입니다.  

각 팀에서 요청하는 경우 3회에 한하여 사무국에서 사무국에서 선정한 Dataset으로 성능 측정이 가능하며, 평가한 결과는 리더보드에 공개됩니다.  


#### Hardware
대회는 NVIDIA Jetson AGX Orin 32GB 사용합니다.  
NVIDIA Jetson AGX Orin 32GB 모델의 자세한 사양은 다음 <a target="_blank" href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/"> Jetson AGX Orin</a>을 참고하세요.  
해당 기기를 미보유한 참가자는 참가 접수시 기기대여가 가능합니다.
 (단, 접수 기준 선착순으로 수량이 한정되어 있으니 참고 부탁드립니다.)

#### 모델/데이터셋/프레임워크
모델/데이터셋/프레임워크와 관련된 사항은 대회가 시작하는 8/1일 오전 10시에 공개됩니다. 

<!-- 
### 허용 모델

대회의 베이스 모델(base model)은 instruction tuning이 없는 오픈 베이스 모델인 **LLaMA-30B** 또는 **OPT-30B**입니다. LLaMA 모델의 사용을 위해 다음 <a target="_blank" href="https://github.com/facebookresearch/llama/blob/main/LICENSE">LLaMA-1 Community License Agreement</a>을 확인하고 커뮤니티에 라이센스 요청을 해야 합니다. <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfqNECQnMkycAp2jP4Z9TFX0cGR4uf7b_fBxjY_OjhJILlKGA/viewform">Download Link</a>를 참고하여 진행하세요. OPT-30B에 대한 다운로드는 다음 <a target="_blank" href="https://huggingface.co/facebook/opt-30b"> Huggingface link</a>을 참고하세요.

### 데이터셋

대회에서 허용되는 데이터셋은 <a target="_blank" href="https://huggingface.co/datasets/hellaswag">HellaSwag</a>입니다. 해당 데이터셋을 사용한 추론만 허용되며, 다른 데이터셋은 허용되지 않습니다.

### 프레임워크

최적화를 위해 사용 할 딥러닝 프레임워크는 PyTorch 2.0입니다. 다음 <a target="_blank" href="https://github.com/pytorch/pytorch/tree/v2.0.0">link</a>를 참고하시기 바랍니다. 또한, PyTorch 2.0 기반의 프레임워크도 사용하실 수 있습니다. (예시: FasterTransformer)

-->

#### 제약사항 및 기준

 1. 모델의 정확도를 현저하게 떨어트리는 조정 및 미세 조정(re-training)은 금지합니다.  
  ※ 모델의 구조를 수정하는 기법은 허용되지 않으며, 또한 Weight 및 Activation을 수정하는것 역시 허용하지 않습니다. (ex. Quantization)  
 2. 최적화 및 알고리즘 적용으로 인해 생기는 약간의 Accuracy drop은 허용합니다.  
 3. 제시한 데이터셋 이외에 다른 데이터 사용은 금지합니다.
 4. 적절한 출처를 제공한다면 오픈 소스 코드와 라이브러리 사용은 허용합니다.  
 5. 대회에서 규정한 Latency는 "제시한 데이터셋을 모두 처리하는데 걸리는 시간"이며, 데이터 전처리를 위한 시간을 제외한 나머지 요소들은 포함됩니다.  
  ※ 대회 취지에 맞는 최적화 및 알고리즘을 적용하여 추론 시간 외 나머지 사항에 대한 최적화는 허용합니다. 이 부분은 정성적 평가때 충분히 고려 할 예정입니다.

※ 이외의 다른 규칙은 [**Rules**](https://cechallenge.github.io/rules/)를 참고해주세요.


#### Leaderboard 제출물

 '모델을 수행했을 때 출력 되는 Inference time과 Accuracy를 캡쳐한 이미지 파일.  

#### 참가 자격

 1. 문제 해결을 휘애 사용한 최적화 방법과 알고리즘을 설명하는 문서. (**docs**/**ppt**/**pdf** 등)
 2. 최적화를 위해 Docker Container를 DockerHub에 Upload한 주소.  
    
위 두 가지 항목을 [**Submission**](https://cechallenge.github.io/submission/)으로 제출해야 합니다.


###### 주의 사항

※ Leaderboard에 표시된 순위표는 다른 팀의 결과를 공유하기 위한 수단일 뿐입니다.  
※ 최종 순위는 여러 가지 평가 기준을 통해 최종 결정됩니다.

<!-- 
<hr />

## Qualifications

To participate in this competition, You must meet the following qualifications criteria.  
 1. Be enrolled in college or graduate school as of August '23, or be on a leave of absence.  
 2. Participate as an individual or as a team, with a maximum of 3 people per team.  
  (A person/team can only submit 1 deliverable)  

## Competition description

The goal is to minimize latency while maintaining high accuracy using the LLM and the dataset and underlying framework presented in the problem. Participants can apply various optimization methods and algorithms to minimize inference time. See below for the competition constraints and requirements for each round.

### Approved base model

The competition base model is the **LLaMA-30B** or **OPT-30B**, an open base model with no instruction tuning. To use the LLaMA model, you need to check the following <a target="_blank" href="https://github.com/facebookresearch/llama/blob/main/LICENSE">LLaMA-1 Community License Agreement</a> and request a license from the community. Please refer to the <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfqNECQnMkycAp2jP4Z9TFX0cGR4uf7b_fBxjY_OjhJILlKGA/viewform">Download Link</a> to proceed. If you are interested in using the OPT-30B, check out the <a target="_blank" href="https://huggingface.co/facebook/opt-30b">following links.</a>



### Datasets

The dataset we accept in the competition is <a target="_blank" href="https://huggingface.co/datasets/hellaswag">HellaSwag</a>. We only accept inferences made using that dataset, and no other datasets.

### Framework

The deep learning framework we will use for optimization is PyTorch 2.0. Please refer to the following <a target="_blank" href="https://github.com/pytorch/pytorch/tree/v2.0.0">link</a>. We also accept frameworks based on PyTorch 2.0. (ex. FasterTransformer)

### Constraints

 1. Prohibit adjustments and fine-tuning (re-training) that significantly reduce the accuracy of the model.  
  ※ Techniques that modify the model architecture are not allowed, nor are modifications to weights and activations (e.g., quantization).  
 2. Allow a slight degradation of accuracy due to optimization and algorithmic adaptation.  
  ※ Note that the 33B, 82.8%, presented in the LLaMA paper is not based on baseline accuracy, but on accuracy performed by participants and teams in their local environment.  
 3. Prohibit the use of data other than the provided dataset.  
 4. Use of open source code and libraries is allowed if proper credit is given.  
 5. Latency, as defined by the competition, is "the time it takes to process all of the presented datasets", excluding time for data preprocessing.  
  ※ Optimizations and algorithms that serve the purpose of the competition are acceptable, but cheating is not, and this will be fully considered in the qualitative evaluation.

For other rules, please see the [**Rules**](https://cechallenge.github.io/rules/) page.

### Evaluation

There are two rounds to this challenge.

##### Primary

The first round of the competition aims for participants to run the given model and dataset in their local machine environment and apply possible optimizations and algorithms within the given environment. The first round is a qualitative evaluation based on participants' technical documentation (reports) and source code. At the end of the first round of evaluation, the top 10 teams will be selected.

###### First round assessment submissions

 1. Documentation describing the optimization methods and algorithms used by participants. (**docs** or **pdf** format)  
  ※ Please list the inference time and accuracy performed on the participant's and team's local environment.  
 2. A GitBub URL containing the framework and source code that you modified.

Make sure you submit the above two items in the [**Submission.**](https://cechallenge.github.io/submission/)

##### Second

The second round of the competition is a quantitative evaluation, with the goal of achieving the fastest inference time within the **same given server environment**. The model to be used in the second round is **LLaMA-30B**. The given server environment looks like this.

 * OS: Ubuntu 18.04 64-bit  
 * Number of vCPU core : 32  
 * Storage : SSD 1TB  
 * RAM : 360GB  
 * GPU : NVIDIA Tesla V100 Model 4EA  
  * Total GPU Memory : 128GB  
  * Supports NVLink

Participants must proceed with model inference on a given server during the second round and submit inference time. The leaderboard runs in two rounds and is updated at **10 a.m.(KST)** every day. If you submit it several times, it will be registered based on the last submission.

###### Second round assessment submissions

 1. Documentation describing the optimization methods and algorithms used by participants. (**docs** or **pdf** format)  
 2. A GitBub URL containing the framework and source code that you modified.  
 3. Inference time

Before the end of second round, Make sure you submit the above three items in the [**Submission.**](https://cechallenge.github.io/submission/)

###### Cautions

※ The Leaderboard is just a way to share other teams' results.  
※ Final rankings will be determined based on multiple evaluation criteria.
-->
