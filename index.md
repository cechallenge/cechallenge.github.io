---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2024
feature_image: "/assets/logos/banner_last.png"
---

대규모 언어모델은 Scaling Law를 기반으로 지속적으로 그 규모가 증가하고 있으나, 메모리 용량과 메모리 대역폭 등의 시스템 제약에 의해 추론 성능의 개선은 한계에 부딪치고 있습니다.
특히 온 디바이스 활용에서는 부족한 메인 메모리 용량을 보완하기 위한 다양한 방법(ex. 멀티 티어 메모리)이 사용 되지만 이에 대한 추론 성능의 최적화 방식은 아직 확립되지 않았습니다.

삼성전자 SAIT는 온 디바이스 언어모델 이용을 활성화 하기 위하여 **Computer Engineering(CE) Challenge**를 개최하게 되었습니다.
이번 Computer Engineering Challenge의 목표는 대규모 언어 모델의 정확도를 유지한 채로 제한된 메모리 및 컴퓨팅 리소스를 사용하여 추론 속도를 최대화하는 것 입니다.
Computer Engineering Challenge에 참여한 각 팀은 주어진 동일한 디바이스 환경에서 추론 속도를 최대화하는 방법론을 제안 및 구현하고, 그 성능 평가 결과를 기반으로 시상할 예정입니다.

이번 Computer Engineering Challenge는 대규모 언어모델을 위한 시스템 최적화 방법론에 대한 학생들의 관심을 높이기 위해 개최되었습니다. 저희는 더 많은 학생들이 Computer Engineering 분야에 관심을 가지고 연구하길 희망하며, 이를 통해 AI Computing 시대를 앞당기고 에너지와 비용을 절감하는 데 큰 역할을 할 것으로 기대합니다.    


<hr />

The Large-scale language models are continuously increasing in size based on the Scaling Law. However, improvements in inference performance are limited due to system constraints such as memory capacity and memory bandwidth. In particular, various methods (e.g. multi-tier memory) are used to compensate for insufficient main memory capacity in on-device utilization, but the optimization method for inference performance has not been established yet.

Samsung SAIT is holding the **Computer Engineering(CE) Challenge** to promote the use of on-device language models. The goal of this Computer Engineering Challenge is to maximize the inference speed while maintaining the accuracy of large-scale language models using limited memory and computing resources. Each team participating in the Computer Engineering Challenge will propose and implement methodologies to maximize the inference speed in the given device environment. Awards will be based on the evaluation of their performance.

Through this Computer Engineering Challenge, we hope that more students will become interested in system optimization methodologies for large-scale language models. We expect that this increased interest in Computer Engineering will advance the AI Computing era to come in the future and contribute greatly to reducing energy and costs.

<!-- layer popup content -->

<div class="layerPopup" id="layer_popup" style="visibility: visible;">
    <div class="layerBox" style="width:45%;">
        <h5 class="title"> <b> [긴급] 추가 Dataset 제공 및 대회기간 연장 안내 </b></h5>
        <div class="cont">
	 	<b style="font-size:20px;"> 참가자분들께서 보내주신 1,2,3차 평가결과 Out of Memory로 인한 오작동이 빈번하게 발생하였습니다. 
                                            긴급하게 내부적으로 논의한 결과 추가 검증을 위해 평가 데이터 중 가장 긴 sample 데이터를 제공하고 대회기간을 연장하게되었습니다. </b> 
		<br> 
		<br> 
		<b style="font-size:20px;">  대회기간 연장 : <strike> 9월 27일(금) 23:59 </strike>  &#129046; <b>  10월 6일(일) 23:59 </b>
			<P></P>
      	       <b style="font-size:20px;"> 추가 Dataset : 평가 데이터 중 가장 긴 sample 데이터를 제공합니다.</b> 
		<br>
		<br>
      		<b style="font-size:20px;">  자세한 내용은 <a target="_blank" href="https://cechallenge.github.io/Notice/" style="color:red"> Notice Link </a>을 참고하세요. </b> 
  	<br>
   	<br> 
        <form name="pop_form">
            <div id="check" ><input type="checkbox" name="chkbox" value="checkbox" id='chkbox' >
            <label for="chkbox">오늘 하루동안 보지 않기</label></div>
		      <div id="close" ><a href="javascript:closePop();">닫기</a>
		
	</div> 



<!-- 
<div class="layerPopup" id="layer_popup" style="visibility: visible;">
    <div class="layerBox" style="width:45%;">
        <h5 class="title"> <b>최종 결과물 제출 안내</b></h5>
        <div class="cont">
	    <b style="font-size:20px;">기간 : ~2024년 9월 27일 (금) 23:59</b> 
      	    <br><br><p style="line-height:1;"><b>최종 제출물</b>  </p>        
    	    <p style="line-height:1;">&nbsp;&nbsp;&nbsp;&nbsp; 1. 최적화 결과물이 포함되어 있는 docker image 주소   
      	    <p style="line-height:1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (다운로드 가능해야 하며, Private으로 Docker image를 올릴 경우, github cechallenge 계정에 접근 권한 부여)  </p> 
            <p style="line-height:1;">&nbsp;&nbsp;&nbsp;&nbsp; 2. 문제 해결을 위해 사용한 최적화 방법과 알고리즘을 설명하는 문서 (docs/ppt/pdf 등)          
	    <br><br><p style="line-height:1; color:#be0000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ※ docker image는 파일이 아닌 주소입니다.  </p>
	    <p style="line-height:1; color:#be0000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ※ 코드 제출은 개별 파일이 아닌 docker container로만 받으며, test script 등 모든 내용은 container에 포함되어야 합니다.   </p>
	    <p style="line-height:1; color:#be0000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개별 파일로 제출 가능한 것은 실행 방법이 적힌 README 파일뿐입니다.</p>
            <br><p style="line-height:1;">&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;E-mail : cechallenge@samsung.com </p>   
        <br>         
        <form name="pop_form">
            <div id="check" ><input type="checkbox" name="chkbox" value="checkbox" id='chkbox' >
            <label for="chkbox">오늘 하루동안 보지 않기</label></div>
		      <div id="close" ><a href="javascript:closePop();">닫기</a>
		
	</div> 
--> 
