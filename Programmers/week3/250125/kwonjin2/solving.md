# 📝 Solving: 이웃한 칸 (250125)

## 문제 요약

- board: NxN 크기의 2차원 문자열 배열 (각 칸에 색 이름이 있음)

- h, w: 특정 칸의 좌표 (0 ≤ h, w < N)

- 선택한 칸 board[h][w]과 상하좌우 인접한 칸들을 확인

- 그중 같은 색깔인 칸의 개수를 구해서 반환

## 접근 방법

- 먼저 currentColor, count, direction 변수를 만들어주고 for문을 통해 direction을 받아서

- currentColor와 direction으로 적용한 좌표의 색상이 같으면 count++을 해줌
