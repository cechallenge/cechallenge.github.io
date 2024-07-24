---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2024
feature_image: "/assets/logos/banner_last.png"
excerpt:
---

#### 평가 기준
본 대회는 주어진 Device 환경에서 LLM의 Inference를 최소화한 시간을 정량적으로 평가합니다.   
또한, 공지된 Accuracy 대비 drop 제한은 평균 0.5 이내의 감소로 제한됩니다.
   
       
#### Hardware
Device는 NVIDIA Jetson AGX Orin 32GB를 사용합니다.  
NVIDIA Jetson AGX Orin 32GB 자세한 사양은 <a target="_blank" href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/"> 다음</a>을 참고하세요.  
해당 기기를 미보유한 참가팀은 참가 접수시 기기대여가 가능합니다.   
 (단, 수량이 한정되어 있으니 참고 부탁드립니다.)
   
#### 허용 모델

대회에서 허용된 모델은 아래와 같습니다.   
* **Phi3-medium-4k-instruct(14B)** 모델의 사용을 위해 <a target="_blank" href="https://huggingface.co/datasets/cais/mmlu"> 다음</a>을 참고하세요.  


#### 데이터셋/프레임워크
※ 대회가 시작되는 8/1일 오전 10시에 공개됩니다. 

<!--
#### 데이터셋

대회에서 허용되는 데이터셋은 아래와 같습니다. 해당 데이터셋을 사용한 추론만 허용되며, 다른 데이터셋은 허용되지 않습니다.  

* **MMLU** 데이터셋의 사용을 위해 <a target="_blank" href="https://huggingface.co/datasets/cais/mmlu"> 다음</a>을 참고하세요.  
* **CommonSenseQA** 데이터셋의 사용을 위해 <a target="_blank" href="https://www.tau-nlp.sites.tau.ac.il/commonsenseqa"> 다음</a>을 참고하세요.  
* **Winogrande** 데이터셋의 사용을 위해 <a target="_blank" href="https://huggingface.co/datasets/allenai/winogrande"> 다음</a>을 참고하세요.  
* **BIG-Bench Hard** 데이터셋의 사용을 위해 <a target="_blank" href="https://github.com/suzgunmirac/BIG-Bench-Hard"> 다음</a>을 참고하세요.  
* **BoolQ** 데이터셋의 사용을 위해 <a target="_blank" href="https://github.com/google-research-datasets/boolean-questions"> 다음</a>을 참고하세요.  
* **DROP** 데이터셋의 사용을 위해 <a target="_blank" href="https://huggingface.co/datasets/ucinlp/drop"> 다음</a>을 참고하세요.  


#### 프레임워크

최적화를 위해 사용 할 딥러닝 프레임워크는 PyTorch 2.0입니다. 다음 <a target="_blank" href="https://github.com/pytorch/pytorch/tree/v2.0.0">link</a>를 참고하시기 바랍니다. 또한, PyTorch 2.0 기반의 프레임워크도 사용하실 수 있습니다. (예시: FasterTransformer)

#### CUDA Version  

대회에서 허용되는 CUDA Version은      입니다.   


--> 

#### 제약사항 

* 모델의 정확도를 현저하게 떨어트리는 조정 및 미세 조정(re-training)은 금지합니다.  
  ※ 모델의 구조를 수정하는 기법은 허용되지 않으며, 또한 Weight 및 Activation을 수정하는것 역시 허용하지 않습니다.
*  최적화 및 알고리즘 적용으로 인해 생기는 약간의 Accuracy drop은 허용합니다.  
*  제시한 데이터셋 이외에 다른 데이터 사용은 금지합니다.  
*  적절한 출처를 제공한다면 오픈 소스 코드와 라이브러리 사용은 허용합니다.  
*  대회에서 규정한 Latency는 "제시한 데이터셋을 모두 처리하는데 걸리는 시간"이며, 데이터 전처리를 위한 시간을 제외한 나머지 요소들은 포함됩니다.  
   
   
#### 규칙

이번 대회에서는 공정한 평가 및 재현 가능한 결과를 보장하는 것을 목표로 합니다. 이를 위해 다음 사항을 준수해야 합니다  

 * 제출물은 테스트 환경에서 재현할 수 있어야 하며, 소스 코드는 부정 행위 및 결과 재현을 위해 사용됩니다.
 * 참가팀은 평가를 위해 요청된 자료를 제출해야 합니다.
 * 대회 기간 동안 참가팀들이 작성하는 소스 코드는 비공개한 상태로 운영합니다.
 * 대상 모델은 모델의 정확도를 현저하게 떨어트리는 조정 및 미세 조정을 해서는 안 됩니다.
 * 제출물은 저작권이 있거나 독점적인 데이터 또는 특허 또는 상표, 코드 또는 비공개 소스 콘텐츠를 사용해서는 안 됩니다. 서비스 계약이나 다른 기업의 영업 비밀을 위반하는 데이터나 콘텐츠의 사용은 허용되지 않습니다.
 * 제출물에 제3자 지식재산권 침해 금지 조건 외에 이러한 행위가 발생하는 경우 당사는 어떠한 책임도 부담하지 않습니다.
 * 당사는 참가팀들 간 공유나 카피 방지 검증용으로만 제출물을 사용할 예정이며 대회 종류 후에는 어떠한 경우에도 상업적 목적으로 해당 결과물을 사용하거나 보관하지 않으며, 만약 제출물로 인해 제3자 지식재산권 침해가 발생하는 경우 해당 침해로 인한 손해는 모두 참가팀에게 책임이 있습니다.   
 * 참가팀은 적절한 출처를 제공한다면 오픈 소스 코드와 라이브러리를 사용할 수 있습니다.   
 * 출처 없이 외부 구현을 사용하거나, 다른 참가팀의 구현을 Copy 하여 사용하는 경우에는 실격 처리됩니다.   
 * 한 참가팀은 3명 이하로 구성할 수 있으며, 참가팀에서는 팀원이 이 대회의 다른 팀에 중복 참가하지 않음을 스스로 입증해야 합니다.  
 * 각 참가팀은 대회 기간 동안 모델 추론 결과를 제출할 수 있으며, 가장 우수한 성능을 보이는 참가팀의 순위를 매기고 매일 결과를 갱신합니다. (단, 휴일과 주말제외)  
 * 대회와 관련된 주최자 및 관련자는 참가할 수 없습니다.  
 * 상기 규칙을 위배하지 않더라도 신뢰에 반하거나 부당 행위를 하는 경우 실격 처리될 수 있습니다.  





<!--

<hr />

## Rules

The competition aims to ensure fair evaluation and reproducible results. To achieve this, you must comply with the following guidelines  

* Submissions must be reproducible on a test server. Submissions, Source code is used to reproduce cheating and reproduce results in competitions.
* Participants must submit the requested materials for evaluation.
* During the competition, the source code is kept private.
* The target model should not be subject to adjustments and fine-tuning (retraining) that significantly reduce the accuracy of the model.  
* Submissions must not use copyrighted or proprietary data or patent or trade mark, code, or closed-source content. Use of data or content that violates a service agreement or another company's trade secrets is not permitted.
* We will have no liability if your Submission contains any such conduct, other than that it does not infringe any third party's intellectual property rights.
* We will only use the submitted results for sharing among participants or for copy protection checks, and will not use or retain them for commercial purposes after the competition ends, and participants will be liable for any damages resulting from any infringement of a third party's intellectual property rights as a result of their submission.
* Teams can use open source code and libraries as long as they provide proper attribution.  
* Using an external implementation without attribution, or copying another team's implementation, will result in disqualification.  
* A team can consist of no more than three people. Teams must self-certify that none of their team members are participating on another team in this competition.  
* Each team can submit model inference results during the second round, rank the best-performing team, and update the results every day.  
* Organizers and those associated with the competition are not eligible to participate.  
* Even if you don't violate any of the above rules, you may be disqualified if you act in a way that violates trust or exploit the community.  

-->
