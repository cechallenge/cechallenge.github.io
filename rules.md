---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2025
feature_image: "/assets/logos/banner_last.png"
excerpt:
---

#### 평가 기준
Gem5 시뮬레이터에서 사무국에서 선정한 벤치마크의 실행 시간을 최소화하는 것을 목표로 하며, baseline 실행 시간 대비 성능 개선도(speedup)를 기하 평균(geometric mean)을 내어 합산한 점수를 평가합니다.
* 평가 산식 : <br>
&emsp;&emsp;**GAP_GEOMEAN(ref_time/candidate_time)  + TSVC_GEOMEAN(ref_time/candidate_time)**
  * Baseline Branch Predictor: TournamentBP
  * Baseline Compiler: 제공된 Docker 이미지의 Makefile 컴파일 옵션
    * GAP 컴파일 최적화 baseline: clang -O3 -fno-vectorize  -fno-slp-vectorize
    * TSVC 컴파일 최적화 baseline: clang -O3
<br>


#### 평가 환경
Docker 이미지를 통해 동일 환경을 제공하며, 제출한 소스코드는 해당 환경에서 정상적으로 실행 및 종료되어야 합니다. <br>
**※ Docker 이미지는 7/22일 공개 예정입니다.** <br>
* Gem5 version 25.0.0 (최신 stable version)
  * 1GHz single core
  * fetch_width=8
  * width=4
  * rob_size=128
  * int_regs=128, fp_regs=128
  * lq_entries=32, sq_entries=32
  * L1 Cache=8-way 32KB
  * L2 Cache=8-way 512KB
  * RVV enabled, VLEN=256 bits, ELEN=64 bits
* LLVM version 19.1.7 (stable version)
<br>

   
#### 벤치마크
Docker 이미지를 통해 벤치마크가 제공되며, 벤치마크의 소스 코드를 임의로 수정할 수 없습니다. <br>
**※ 평가 환경 Docker 이미지에 벤치마크가 포함되어 제공됩니다.** <br>
  * GAP (/root/gapbs)
    * GAP은 8개의 벤치마크으로 구성되어 있고, 각 밴치마크 별 수행하는 그래프 데이터의 종류와 크기, 반복 횟수는 각 벤치마크의 특성과 실행시간을 반영해서 각각 다르게 선정하였습니다.
    * bfs, cc, cc_sv, sssp, tc, pr, pr_spmv, bc
  * TSVC (/root/tsvc)
    * 각 카테고리를 대표하는 총 20개의 벤치마크를 선정하였습니다.
    * s000, s121, s131, s171, s1213, s2244, s251, s1281, s311, s351, s491, s442, s212, s222, s231, s281, s341, s352, s4114, s321
<br>


#### 제약 사항
###### 제한 사항
아래의 제한 사항을 위반하면 실격처리 됩니다. <br>

###### Gem5
  * /root/gem5/cpu/pred 디렉토리 하위의 branch predictor는 수정 또는 추가가 가능합니다.
    * **/root/ce_challenge_2025/components/processors_ce_challenge.py** 의 **MyCeChallengeBP** class에 제출할 branch predictor를 연결해서 평가 환경에서 정상 동작해야 합니다.
    * Branch predictor의 총 크기는 128KB로 제한합니다.
    * 기존 RiscvO3CPU 모델의 branchPred parameter만 제출 받은 branch predictor로 변경하여 평가하며, BranchPredictor class에 주어진 인터페이스만 사용합니다.
    * gem5에 제공되어 있는 BranchPredictor를 수정해서 사용 할 수 있고, C++로 branch predictor만들어서 사용도 가능합니다.
      * C++로 새로운 branch predictor를 추가할 경우, **/root/gem5/cpu/pred/SConscript**에 해당 파일의 경로를 추가 후 gem5를 새로 build해야 합니다.
    * 수정 또는 추가한 부분에 대해 설명을 제출해야 하며, branch predictor가 branch history를 기억하기 위해 소비하는 하드웨어 크기를 bit 단위로 기술해야 합니다.
  * 그 외의 모든 모듈은 변경할 수 없습니다.
<br>

###### LLVM
  * LVM 빌드 스크립트는 /root/llvm 디렉토리 안에 llvm_build.sh로 제공됩니다. 해당 빌드 스크립트는 수정이 허용되지 않습니다.
  * 아래에 명시된 하위 디렉토리의 파일을 수정 및 추가하여 패스를 구현할 수 있습니다. 단, 수정 또는 추가한 부분에 대해 설명을 제출해야 합니다.
    * /root/llvm/llvm/lib
      * 디렉토리 이름: Analysis, Transforms, Target/RISCV, Passes
    * /root/llvm/llvm/include/llvm
      * 디렉토리 이름: Analysis, Transforms, Passes
  * 수정 또는 추가한 부분에 대해 설명을 제출해야 합니다.
  * 그 외의 모든 부분은 변경할 수 없습니다.
<br>


###### 벤치마크
  * 각 벤치마크 디렉토리에서 make 커맨드를 통해 컴파일하고, /root/ce_challenge_2025 의 ./RUN_SELF_TEST 를 실행하여 테스트해볼 수 있습니다.
    * <ins>제공된 SELF_TEST 스크립트는 평가에 활용되는 모든 벤치마크를 각 1회 실행합니다. 실제 평가에서는 반복 횟수 및 파라미터가 달라지며 평가 설정은 공개하지 않습니다. 따라서 SELF_TEST의 산출 점수는 Leaderboard 점수와 다를 수 있습니다.</ins>
    * <ins>평가 환경에서 오류 발생 시 오류가 발생한 벤치마크와 에러 메시지를 이메일로 알려드립니다.</ins>
  * 아래의 제한 사항을 제외하고, 각 벤치마크의 Makefile의 “OPT_FLAGS”에 구현한 패스에 대한 컴파일 옵션을 추가할 수 있습니다. Makefile의 “OPT_FLAGS”를 제외한 다른 부분은 수정이 허용되지 않습니다. 이외 테스트를 위한 환경 및 스크립트를 임의 수정이 허용되지 않습니다.
    * GAP 벤치마크: vectorize 관련 옵션 삽입 금지 (--vectorize-slp 등)
    * RISC-V vector length에 대한 hint 삽입 금지 (-force-vector-width, -mrvv-vector-bits 등)
  * Makefile의 "OPT_FLAGS"를 제외한 다른 부분은 수정할 수 없습니다.
<br>이외 테스트를 위한 환경 및 스크립트를 임의 수정할 수 없습니다.<br>
<br>


#### 대회 규칙
* 이번 대회에서는 공정한 평가 및 재현 가능한 결과를 보장하는 것을 목표로 합니다. 이를 위해 다음 사항을 준수해야 합니다.
1. 제출물은 테스트 환경에서 재현할 수 있어야 하며, 소스 코드는 부정 행위 및 결과 재현을 위해 사용됩니다.
2. 참가팀은 평가를 위해 요청된 자료를 제출해야 합니다.
3. 대회 기간 동안 참가팀들이 작성하는 소스 코드는 비공개한 상태로 운영합니다.
4. 제출물은 저작권이 있거나 독점적인 데이터 또는 특허 또는 상표, 코드 또는 비공개 소스 콘텐츠를 사용해서는 안 됩니다. 서비스 계약이나 다른 기업의 영업 비밀을 위반하는 데이터나 콘텐츠의 사용은 허용되지 않습니다.
5. 제출물에 제3자의 지식재산권을 침해하는 행위 등이 포함될 경우, 당사는 이에 대한 책임을 지지 않습니다.
6. 당사는 참가팀들 간 공유나 카피 방지 검증용으로만 제출물을 사용할 예정이며 대회 종료 후에는 어떠한 경우에도 상업적 목적으로 해당 결과물을 사용하거나 보관하지 않으며, 만약 제출물로 인해 제3자 지식재산권 침해가 발생하는 경우 해당 침해로 인한 손해는 모두 참가팀에게 책임이 있습니다.
7. 출처 없이 외부 구현을 사용하거나, 다른 참가팀의 구현을 Copy 하여 사용하는 경우에는 실격 처리됩니다.
8. 한 참가팀은 3명 이하로 구성할 수 있으며, 참가팀에서는 팀원이 이 대회의 다른 팀에 중복 참가하지 않음을 스스로 입증해야 합니다.
9. 대회와 관련된 주최자 및 관련자는 참가할 수 없습니다.
10. 상기 규칙을 위배하지 않더라도 신뢰에 반하거나 부당 행위를 하는 경우 실격 처리될 수 있습니다. 


<hr />


#### Evaluation Criteria
The goal of this competition is to minimize the execution time of a specified benchmark on the given Gem5 simulator, and the score is evaluated by averaging the performance improvement (speedup) compared to the baseline execution time using the geometric mean.
* Evaluation formula: <br>
&emsp;&emsp;**GAP_GEOMEAN(ref_time/candidate_time)  + TSVC_GEOMEAN(ref_time/candidate_time)**
  * Baseline Branch Predictor: TournamentBP
  * Baseline Compiler: Compilation options in the Makefile of the provided Docker image
    * GAP Compilation Optimization Baseline: clang -O3 -fno-vectorize  -fno-slp-vectorize
    * TSVC Compilation Optimization Baseline: clang -O3
<br>


#### Evaluation Environment
The same environment is provided through Docker images, and the submitted source code must run and terminate normally in that environment. <br>
**※ Docker images will be released on July 22.** <br>
* Gem5 version 25.0.0 (The latest stable version)
  * 1GHz single core
  * fetch_width=8
  * width=4
  * rob_size=128
  * int_regs=128, fp_regs=128
  * lq_entries=32, sq_entries=32
  * L1 Cache=8-way 32KB
  * L2 Cache=8-way 512KB
  * RVV enabled, VLEN=256 bits, ELEN=64 bits
* LLVM version 19.1.7 (stable version)
<br>

   
#### Benchmark
The benchmark is provided through a Docker image, and the benchmark source code cannot be modified arbitrarily. <br>
**※ Benchmarks are included provided Docker image.** <br>
  * GAP (/root/gapbs)
    * GAP consists of eight benchmarks, and the type and size of the graph data performed for each benchmark, as well as the number of iterations, are selected differently to reflect the characteristics and execution time of each benchmark.
    * bfs, cc, cc_sv, sssp, tc, pr, pr_spmv, bc
  * TSVC (/root/tsvc)
    * A total of 20 benchmarks representing each category have been selected.
    * s000, s121, s131, s171, s1213, s2244, s251, s1281, s311, s351, s491, s442, s212, s222, s231, s281, s341, s352, s4114, s321
<br>


#### Restrictions
###### Gem5
  * You can modify or add branch predictors under the /root/gem5/cpu/pred directory.
    * The branch predictor to be submitted to the MyCeChallengeBP class in /root/ce_challenge_2025/components/processors_ce_challenge.py must be connected and function normally in the evaluation environment.
    * The total size of the branch predictor is limited to 128KB.
    * The branchPred parameter of the existing RiscvO3CPU model will be changed to the submitted branch predictor for evaluation, and only the interface provided in the BranchPredictor class will be used.  
    * You can modify the BranchPredictor provided in gem5 or create a branch predictor in C++.
      * If you add a new branch predictor in C++, you must add the path to the file to /root/gem5/cpu/pred/SConscript and then rebuild gem5.
    * You must submit an explanation of the modifications or additions, and describe the hardware size consumed by the branch predictor to remember the branch history in bits.
  * All other modules cannot be modified.
<br>

###### LLVM
  * The LLVM build script is provided as llvm_build.sh in the /root/llvm directory. This build script cannot be modified.
  * You can implement the pass by modifying and adding files in the following subdirectories.
    * /root/llvm/llvm/lib
      * Directory: Analysis, Transforms, Target/RISCV, Passes
    * /root/llvm/llvm/include/llvm
      * Directory: Analysis, Transforms, Passes
  * You must submit a description of any modifications or additions you make.
  * All other modules cannot be modified.
<br>


###### Benchmarks
  * You can compile using the make command in each benchmark directory and run ./RUN_SELF_TEST in /root/ce_challenge_2025 to test it.
    * <ins>The provided SELF_TEST script runs each benchmark once for evaluation purposes. In actual evaluations, the number of repetitions and parameters may vary, and evaluation settings are not disclosed. Therefore, the scores generated by SELF_TEST may differ from those on the Leaderboard.</ins>
    * <ins>If an error occurs in the evaluation environment, we will notify you via email of the benchmark where the error occurred and the error message.</ins>
  * Except for the following restrictions, you can add compilation options for the implemented path to the “OPT_FLAGS” in each benchmark's Makefile.
    * GAP benchmark: Do not insert vectorization-related options (e.g., --vectorize-slp).
    * Do not insert hints related to RISC-V vector length (e.g., -force-vector-width, -mrvv-vector-bits).
  * No other parts of the Makefile except for “OPT_FLAGS” can be modified.
<br>You cannot arbitrarily modify the environment and scripts for other tests.<br>
<br>
**Violation of the above restrictions will result in disqualification.**
<br>


#### Competition Rules
* The goal of this competition is to ensure fair evaluation and reproducible results. To this end, the following rules must be observed.
1. Submissions must be reproducible in the test environment, and source code will be used to verify the absence of cheating and to reproduce results.
2. Participating teams must submit the requested materials for evaluation.
3. Source code written by participating teams during the competition period will be kept confidential.
4. Submissions must not use copyrighted or proprietary data, patents, trademarks, code, or confidential source content. The use of data or content that violates service agreements or other companies' trade secrets is not permitted.
5. We are not responsible for any infringement of third-party intellectual property rights contained in submissions.
6. We will use submissions solely for the purpose of verifying sharing and copying prevention among participating teams. After the competition ends, we will not use or store the results for commercial purposes under any circumstances. If a third party's intellectual property rights are infringed upon due to a submission, the participating team will be held responsible for all damages resulting from such infringement.
7. Using external implementations without attribution or copying another participating team's implementation will result in disqualification.
8. Each participating team may consist of up to three members, and participating teams must verify that their members are not participating in other teams in this competition.  
9. Organizers and related parties involved in the competition are not eligible to participate.  
10. Even if the above rules are not violated, disqualification may occur if there is a breach of trust or unfair conduct. 