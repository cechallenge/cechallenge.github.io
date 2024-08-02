---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2024
feature_image: "/assets/logos/banner_last.png"
excerpt:
---

#### 평가 기준
본 대회는 주어진 Device 환경에서 LLM의 Inference를 최소화한 시간을 정량적으로 평가하며, 공지된 Accuracy 대비 평균 0.5% 이내의 감소로 제한됩니다.
   
       
#### Target Device
 * Device는 NVIDIA Jetson AGX Orin 32GB를 사용합니다.  NVIDIA Jetson AGX Orin의 자세한 사양은 <a target="_blank" href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/"> 다음</a>을 참고하세요.  
 * 해당 기기를 미보유한 참가팀은 참가 접수시 기기대여가 가능합니다. (단, 수량이 한정되어 있으니 참고 부탁드립니다.)
   
#### Target Model
 * 대회에서 허용된 모델은 오픈 베이스 모델인 **Phi3-medium-4k-instruct(14B)** 입니다.  
 * 모델의 사용을 위해 <a target="_blank" href="https://ai.azure.com/explore/models/Phi-3-medium-4k-instruct/version/1/registry/azureml"> 다음</a>을 참고하세요.  


#### Target Dataset
 * 최종 심사에 사용할 비공개 데이터셋에는 Huggingface Phi3-medium-4k-instruct repository의 Benchmark set 19개 중 일부가 포함되어있습니다.
 * 자체 점검 및 리더보드 등록을 위해 참가자들에게 OpenBookQA를 가공한 공개 데이터셋이 제공됩니다. (출처: https://huggingface.co/datasets/allenai/openbookqa)
   * <a href="/assets/files/test_script.py" download="test_script.py"> test_script.py</a>
   * <a href="/assets/files/test_dataset.jsonl" download="test_dataset.jsonl"> test_dataset.jsonl</a>
  
#### Framework
 * 최적화를 위해 사용 할 딥러닝 프레임워크는 PyTorch 2.x입니다.
 * 적절한 출처를 제공한다면 오픈 소스 코드와 라이브러리 사용은 허용합니다.

#### JetPack Version
 * 대회에서 허용되는 버전은 6.0입니다.

#### 평가 방식
 * PyTorch 2.x 프레임워크 최적화를 통해 Latency 성능 개선을 평가합니다. 성능 측정에 포함되는 부분은 **데이터 로드**와 **inference time** 입니다.  
 * inference 이후 **accuracy 측정을 위한 데이터 처리는 포함되지 않습니다.**  
   * 예를 들어, 제공된 test_script.py내에 **Section 3** 부분만 Latency 측정에 포함됩니다.  
 * 제공된 script처럼 Transformer의 pipeline을 사용할 필요는 없습니다. 다만, **pipe() 실행 output의 form과 동일한 결과**만 허용됩니다.  
   * 다른 최적화된 패키지를 사용하는 경우에는 최종 결과물에 test_script.py와 유사한 형태의 python script를 제공해야 합니다.  
 * script에서 사용한 text-generation은 한 예시로, dataset의 특성에 따라 바뀔 수 있습니다. (dataset 별 output form이 pipe와 동일해야함)  
 * 최종 평가에서 accuracy 측정은 주최측에서 진행할 예정입니다. (리더보드에서는 편의를 위해 간단한 accuracy 측정이 포함되어 있습니다.)

#### 제약사항 

* 모델의 정확도를 현저하게 떨어트리는 조정 및 미세 조정(re-training)은 금지합니다.  
  ※ 모델의 구조를 수정하는 어떤 기법도 허용되지 않으며, 또한 Weight 및 Activation을 수정하는 것 역시 허용하지 않습니다.
     (모델의 weight 및 activation을 직접적으로 수정하는 quantization, pruning 등 불가) 
*  최적화 및 알고리즘 적용으로 인해 생기는 약간의 Accuracy drop은 0.5% 이내로 허용합니다.  
*  제시한 Dataset 이외에 다른 데이터 사용은 금지합니다.  
*  적절한 출처를 제공한다면 오픈 소스 코드와 라이브러리 사용은 허용합니다.  
 
   
#### 대회 규칙

* 이번 대회에서는 공정한 평가 및 재현 가능한 결과를 보장하는 것을 목표로 합니다. 이를 위해 다음 사항을 준수해야 합니다  
 1. 제출물은 테스트 환경에서 재현할 수 있어야 하며, 소스 코드는 부정 행위 및 결과 재현을 위해 사용됩니다.
 2. 대회에서 규정한 Latency는 “제시한 Dataset을 모두 처리하는데 걸리는 시간” 입니다.  
 3. Jetson AGX Orin kit에 외장 메모리를 추가하여 사용 가능합니다. (Micro SD 한정)  
 4. 참가팀은 평가를 위해 요청된 자료를 제출해야 합니다.    
 5. 각 참가팀은 대회 기간 동안 모델 추론 결과를 제출할 수 있으며, 가장 우수한 성능을 보이는 참가팀의 순위를 매기고 매일 결과를 갱신합니다. (단, 휴일과 주말제외)    
 6. 대회 기간 동안 참가팀들이 작성하는 소스 코드는 비공개한 상태로 운영합니다.
 7. 제출물은 저작권이 있거나 독점적인 데이터 또는 특허 또는 상표, 코드 또는 비공개 소스 콘텐츠를 사용해서는 안 됩니다. 서비스 계약이나 다른 기업의 영업 비밀을 위반하는 데이터나 콘텐츠의 사용은 허용되지 않습니다.    
 8. 제출물에 제3자의 지식재산권을 침해하는 행위 등이 포함될 경우, 당사는 이에 대한 책임을 지지 않습니다.  
 9. 당사는 참가팀들 간 공유나 카피 방지 검증용으로만 제출물을 사용할 예정이며 대회 종료 후에는 어떠한 경우에도 상업적 목적으로 해당 결과물을 사용하거나 보관하지 않으며, 만약 제출물로 인해 제3자 지식재산권 침해가 발생하는 경우 해당 침해로 인한 손해는 모두 참가팀에게 책임이 있습니다.    
 10. 출처 없이 외부 구현을 사용하거나, 다른 참가팀의 구현을 Copy 하여 사용하는 경우에는 실격 처리됩니다.   
 11. 한 참가팀은 3명 이하로 구성할 수 있으며, 참가팀에서는 팀원이 이 대회의 다른 팀에 중복 참가하지 않음을 스스로 입증해야 합니다.    
 12. 대회와 관련된 주최자 및 관련자는 참가할 수 없습니다.  
 13. 상기 규칙을 위배하지 않더라도 신뢰에 반하거나 부당 행위를 하는 경우 실격 처리될 수 있습니다.  

<hr />

#### Evaluation Criteria
The competition quantitatively evaluates the time taken to minimize LLM inference on a given device, limited to a 0.5% accuracy drop from the announced accuracy.

#### Target Device
 * NVIDIA Jetson AGX Orin 32GB. Please refer to the following for detailed specifications of NVIDIA Jetson AGX Orin.  
 * Device rental is available for teams without the device.  (However, please note that the quantity is limited. )

#### Target Model
 * Allowed model: **Phi3-medium-4k-instruct (14B)**
 * Please refer to the following for using the model.

#### Target Dataset
 * The private dataset used for the final evaluation includes some of the 19 Benchmark sets from Phi3-medium-4k-instruct repository in Huggingface.
 * For self-check and leaderboard registration, a test dataset processed from OpenBookQA will be provided to the participants.
   * <a href="/assets/files/test_script.py" download="test_script.py"> test_script.py</a>
   * <a href="/assets/files/test_dataset.jsonl" download="test_dataset.jsonl"> test_dataset.jsonl</a>
  
#### Framework
 * Allowed framwork is PyTorch 2.x.
 * Use of open source code and libraries is permitted, provided that appropriate sources are cited.

#### JetPack Version
 * The version 6.0 is allowed.

#### Evaluation Method
 * We evaluate the improvement in Latency performance through optimization of the PyTorch 2.x framework. The performance measurement includes **data loading** and **inference time**.  
 * Data processing for accuracy measurement after **inference is not included**.  
   * For example, **only Section 3** within the provided test_script.py is included in the Latency measurement.  
 * There is no need to use the Transformer's pipeline like the provided script. However, **only the result with the same form as the output of the pipe() execution** is allowed.  
   * In case of using other optimized package, you must provide a python script similar to test_script.py in the final product.  
 * The text-generation used in the script is an example and can change depending on  the dataset. (The output form for each dataset must be the same as the pipe)  
 * In the final evaluation, accuracy measurement will be carried out by the host. (For convenience, a simple accuracy measurement is included in the leaderboard.)

#### Constraints
 * No significant accuracy drop adjustments or retraining.
   * No structural modifications or direct weight/activation modifications allowed (Quantization, pruning, etc. that directly modify the weight and activation of the model are not possible.)
 * Accuracy drop from optimization must be within 0.5%.
 * Only the provided dataset can be used.
 * Open-source code and libraries are allowed with proper attribution.

#### Competition Rules
* The competition aims to ensure fair evaluation and reproducible results. To do this, you must adhere to the following.    
 1. Submissions must be reproducible in a test environment, and the source code will be used to detect cheating and reproduce results.    
 2. Latency is defined as "the time it takes to process all of the presented dataset".    
 3. External memory can be added to the Jetson AGX Orin kit (Micro SD only).    
 4. Teams must submit the requested materials for evaluation.    
 5. Each team can submit model inference results during the competition period, and the best performing teams will be ranked and the results will be updated daily 
(excluding holidays and weekends).    
 6. The source code created by teams should be remained private during the competition.    
 7. Submissions must not use copyrighted or proprietary data or patents or trademarks, code, or closed source content. Use of data or content that violates a service agreement or another company's trade secrets is not permitted.    
 8. We are not responsible if your Submission contains conduct that infringes any third party's intellectual property rights.    
 9. We will only use the submissions to verify cheating and sharing among participating teams. We will not use or retain the results for commercial purposes under any circumstances after the Competition ends. If your submission results in any infringement of third-party intellectual property rights, you will be responsible for any damages resulting from such infringement.    
 10. Using an external implementation without citation, or copying another team's implementation, will be eliminated.    
 11. A participating team should consist of no more than 3 people, and the participating team must certify that no team member is a duplicate participant in any other team.    
 12. Organizers and associated with the competition are not eligible to participate.    
 13. Even if you do not violate any of the above rules, you may be eliminated if you act is untrustworthy or unfair.    
