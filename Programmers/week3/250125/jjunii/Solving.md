# 📝 Solving: [250125 이웃한 칸](https://school.programmers.co.kr/learn/courses/30/lessons/250125)

## 문제 요약

- `board`: 각 칸에 칠해진 색깔 이름이 담긴 이차원(n x n) 문자열 리스트
- `h`, `w`: 고른 칸의 위치
- `board[h][w]`와 이웃한 칸들 중 같은 색으로 칠해져 있는 칸의 개수 return

---

## 풀이 방법

- `board[h][w]`의 상하좌우 좌표를 순회하며, 동일한 경우 +1