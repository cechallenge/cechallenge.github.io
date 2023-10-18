---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2023
  ## No system, No AI: Let's Play with LLM!
feature_image: "/assets/logos/banner_last.png"
excerpt:
---

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

 
