---
title:
feature_text: |
  # Samsung Computer Engineering Challenge 2025
feature_image: "/assets/logos/banner_last.png"
excerpt:
---

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .leaderboard-card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
            padding: 1rem;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .table-header {
            border-bottom: 1px solid #e9ecef;
            padding-bottom: 8px;
            margin-top: 20px;
        }

        .table-header .row {
            margin: 0;
        }

        .table-header .col-2, 
        .table-header .col-6, 
        .table-header .col-4 {
            padding: 0 15px;
        }
        
        .leaderboard-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .rank-number {
            font-weight: bold;
            font-size: 1.2rem;
            min-width: 3rem;
            text-align: center;
        }
        
        .team-name {
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .score {
            font-family: 'Courier New', monospace;
            font-weight: bold;
            font-size: 1.1rem;
        }
        
        .medal {
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
        
        .gold { color: #FFD700; }
        .silver { color: #C0C0C0; }
        .bronze { color: #CD7F32; }
        
        .preparing-card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .countdown-timer {
            font-family: 'Courier New', monospace;
            font-size: 2rem;
            font-weight: bold;
            color: #007bff;
            margin: 1rem 0;
        }
        
        .dday {
            font-size: 1.5rem;
            font-weight: bold;
            color: #dc3545;
            margin-left: 1rem;
        }
        
        .open-info {
            color: #6c757d;
            font-size: 1.1rem;
            margin: 1rem 0;
        }
        
        .notice {
            margin-top: 2rem;
            padding: 1rem;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #007bff;
        }
        
        .notice h6 {
            margin-bottom: 0.5rem;
            color: #495057;
        }
        
        .notice p {
            margin-bottom: 0;
            color: #6c757d;
            font-size: 0.9rem;
        }
        
        .spinner-border-sm {
            width: 1rem;
            height: 1rem;
        }
        
        @media (max-width: 768px) {
            .countdown-timer {
                font-size: 1.5rem;
            }
            .dday {
                font-size: 1.2rem;
                display: block;
                margin-left: 0;
                margin-top: 0.5rem;
            }
        }
    </style>
</head>
<body class="bg-light">
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center mb-4">🏆 Leaderboard</h1>
                
                <div id="loading" class="text-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">로딩 중...</span>
                    </div>
                </div>
                
                <div id="preparing" class="d-none">
                    <div class="preparing-card">
                        <h2>🚧 리더보드 준비 중입니다</h2>
                        <div class="countdown-timer" id="countdown">
                            <span id="time-display">00:00:00.000</span>
                            <span class="dday" id="dday-display">D-0</span>
                        </div>
                        <div class="open-info">8/1 00시 오픈</div>
                        <p class="text-muted">Coming soon!</p>
                    </div>
                </div>

                <div class="table-header mb-2">
                    <div class="row text-muted small">
                        <div class="col-2 text-center"><strong>Rank</strong></div>
                        <div class="col-6"><strong>Team</strong></div>
                        <div class="col-4 text-end"><strong>Score</strong></div>
                    </div>
                </div>

                <div id="leaderboard" class="d-none">
                    <!-- 리더보드 내용이 여기에 표시됩니다 -->
                </div>

                <div id="error" class="alert alert-danger d-none" role="alert">
                    <strong>오류!</strong> 데이터를 불러오는 중 문제가 발생했습니다.
                </div>
                
                <div class="notice">
                    <h6>주의 사항</h6>
                    <p>※ Leaderboard에 표시된 결과는 참고용이며, 최종 순위는 내부 평가 기준을 통해 결정됩니다.</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        // 웹훅 URL 설정 (실제 URL로 변경하세요)
        const WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE';
        
        // 오픈 시간 설정 (2025년 8월 1일 00:00:00 KST)
        const OPEN_TIME = new Date('2025-08-01T00:00:00+09:00');
        
        let countdownInterval;
        let refreshInterval;

        // 카운트다운 업데이트 함수
        function updateCountdown() {
            const now = new Date();
            const difference = OPEN_TIME.getTime() - now.getTime();
            
            if (difference <= 0) {
                // 오픈 시간이 지난 경우
                document.getElementById('time-display').textContent = '00:00:00.000';
                document.getElementById('dday-display').textContent = 'D-Day';
                clearInterval(countdownInterval);
                return;
            }
            //console.log(difference.format('yyyy-MM-dd HH:mm:ss'))
            
            // 시간 계산
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            const milliseconds = Math.floor((difference % 1000));
            
            // 총 시간으로 표시 (일*24 + 시간)
            const totalHours = days * 24 + hours;
            
            // 시:분:초.밀리초 형식으로 표시
            const timeString = `${totalHours.toString().padStart(3, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
            const ddayString = `D-${days + 1}`;
            
            document.getElementById('time-display').textContent = timeString;
            document.getElementById('dday-display').textContent = ddayString;
        }

        // 리더보드 데이터 가져오기
        async function fetchLeaderboard() {
            // 웹훅 URL이 기본값인 경우 준비중 상태 표시
            if (WEBHOOK_URL === 'YOUR_WEBHOOK_URL_HERE') {
                showPreparing();
                return;
            }
            
            try {
                const response = await fetch(WEBHOOK_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                
                if (!data.rank || !Array.isArray(data.rank)) {
                    throw new Error('Invalid data format');
                }
                
                renderLeaderboard(data.rank);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
                showError();
            }
        }

        // 준비중 상태 표시
        function showPreparing() {
            document.getElementById('loading').classList.add('d-none');
            document.getElementById('preparing').classList.remove('d-none');
            document.getElementById('leaderboard').classList.add('d-none');
            document.getElementById('error').classList.add('d-none');
            
            // 카운트다운 시작
            updateCountdown(); // 즉시 한번 실행
            countdownInterval = setInterval(updateCountdown, 100); // 100ms마다 업데이트
        }

        // 리더보드 렌더링
        function renderLeaderboard(data) {
            const leaderboard = document.getElementById('leaderboard');
            const loading = document.getElementById('loading');
            const preparing = document.getElementById('preparing');

            // 로딩과 준비중 숨기기
            loading.classList.add('d-none');
            preparing.classList.add('d-none');
            
            // 리더보드 보이기
            leaderboard.classList.remove('d-none');

            // 리더보드 내용 생성
            leaderboard.innerHTML = data.map((item, index) => {
                const rank = index === 0 ? '🥇' : 
                                  index === 1 ? '🥈' : 
                                  index === 2 ? '🥉' : 
                                  index + 1;
                let medalHtml = '';
                let rankClass = '';
                
                if (rank === 1) {
                    medalHtml = '<span class="medal">🥇</span>';
                    rankClass = 'gold';
                } else if (rank === 2) {
                    medalHtml = '<span class="medal">🥈</span>';
                    rankClass = 'silver';
                } else if (rank === 3) {
                    medalHtml = '<span class="medal">🥉</span>';
                    rankClass = 'bronze';
                }               
                return `
                    <div class="leaderboard-card">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                ${medalHtml}
                                <span class="rank-number ${rankClass}">${rank}</span>
                                <span class="team-name ms-3">${item.name}</span>
                            </div>
                            <span class="score">${item.score.toFixed(3)}</span>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // 에러 표시
        function showError() {
            document.getElementById('loading').classList.add('d-none');
            document.getElementById('preparing').classList.add('d-none');
            document.getElementById('error').classList.remove('d-none');
        }

        // 페이지 로드 시 실행
        document.addEventListener('DOMContentLoaded', function() {
            fetchLeaderboard();
            
            // 준비중 상태가 아닐 때만 자동 새로고침
            if (WEBHOOK_URL !== 'YOUR_WEBHOOK_URL_HERE') {
                refreshInterval = setInterval(fetchLeaderboard, 30000);
            }
        });

        // 페이지를 벗어날 때 인터벌 정리
        window.addEventListener('beforeunload', function() {
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
            if (refreshInterval) {
                clearInterval(refreshInterval);
            }
        });
    </script>
</body>
</html>
