---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2023
  ## No system, No AI: Let's Play with LLM!
feature_image: "/assets/logos/banner_last.png"
excerpt:
---
# 대회 정보 안내(10월 18일 기준)
아래와 같이 대회 일정 안내 드립니다.

대회 기간은 아래
**2023년 10월 19일(목) 오전 9시 ~ 2023년 10월 25일(수) 오전 11시**입니다.   
**Leaderboard**는 10월 19일 목요일 오전 9시 이후 다시 운영 될 예정입니다.   
Leaderboard 현황 업데이트는 10월 19일 ~ 10월 25일 **오전 10시**에 진행됩니다.    
그리고, 대회 마지막 날 10월 25일(수)에는 **오전 9시**에 마지막 업데이트를 할 예정입니다.

## 서버 이슈 발생
제공해드린 서버에 이슈가 발생 할 경우, cechallenge@samsung.com으로 메일 부탁드리며
최대한 빠르게 이슈 해결 및 새로운 서버를 제공해드릴 수 있도록 하겠습니다.

## FAQ (자주 나온 질문)
Q1. 정확한 inference time에 의미를 알려주세요    
A1. 대회 설명회 때 안내 드린 사항처럼 Dataset pre-processing + Model inference + post-processing입니다.      
&emsp;Model Load, Data I/O, Scoring time을 전부 포함합니다. 아래는 허용 및 금지에 대한 부분입니다.    
&emsp;※ 단순한 Model Weight format 변경(meta -> huggyllama weight format change)은 허용됩니다.      
&emsp;※ **주의1** Model weight size가 변경되거나 이와 유사한 수행(Quantization / pruning 등)은 모두 금지합니다.     
&emsp;※ **주의2** Dataset 내의 item을 변경 및 훼손하는 행위는 금지합니다.    
&emsp;※ **주의3** 오프라인에서 Dataset pre-processing / post-processing은 금지합니다.     
&emsp;&emsp;ex) Embedding값을 미리 계산하여 dataset에 더한 후 파일로 저장하여 model input으로 사용한다 등     
&emsp;※ **런타임**에서 Dataset pre-processing / post-processing은 허용합니다.   
Q2. Warm-up time을 포함하여 시간을 측정해야 하나요?    
A2. 네, exec_evaluation.sh 코드 상에서 보시면 코드를 수행하기 전 / 후 시간을 측정하고 있습니다. warm-up time까지 포함하는 시간으로 측정 부탁드리겠습니다.    
Q3. Evaluation은 어떻게 진행하나요?    
A3. exec_evaluation.sh 코드 사이에 있는 lm-evaluation-harness를 참가팀의 스크립트로 변경하여 사용해주시기 바랍니다.

-------------------------------------------------------------------------------------------- 
## Round 2

2차 라운드에서 사용하게 될 base docker image는 **nvcr.io/nvidia/pytorch:23.05-py3** 입니다.  
base framework는 **PyTorch 2.0**입니다.

### Q&A
Q1. Docker container 실행시 옵션 변경해도 되나요?  
A. --previliged 및 shm-mem size는 각 팀에서 용도에 맞게 변경하셔서 사용하시면 됩니다.  

Q2. PyTorch version 및 설치?  
A. baseline docker image에 PyTorch 2.0이 설치되어 있습니다. 별도로 소스 코드 수정이 필요하실 경우 source code download 후 install 하셔서 사용하시면 됩니다. 자세한 commit 정보는 [commit](https://github.com/pytorch/pytorch/tree/v2.0.0) + [cherry-pick](https://github.com/pytorch/pytorch/pull/97838) 및 해당 [link](https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel-23-05.html) 확인 부탁드립니다.  

Q3. Custom evaluation code 사용 가능한가요?  
A. 네, 다만 다른 팀과의 Scoring 방법이 현저하게 다르지 않도록 주의 부탁 드리겠습니다.  

Q4. Model 및 dataset download?  
A. Model 및 dataset은 직접 서버에 다운로드 받으셔서 사용하셔야 합니다.

### Tutorial & 가이드 문서

2차 라운드를 위한 가이드 문서를 제공 드립니다.  
해당 [Link](https://github.com/cechallenge/round_two_tutorial/tree/main) 참고 부탁드리겠습니다.

 
