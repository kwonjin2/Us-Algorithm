# 📝 Solving: [12913 땅따먹기](https://school.programmers.co.kr/learn/courses/30/lessons/12913)

## 문제 요약

- `land`: `N` X 4, 칸마다 점수
- 1행부터 한 행씩 내려올 때, 4칸 중 한 칸만 밟을 수 있음
- 같은 열을 연속해서 밟을 수 없음
- 가능한 최고점 return
- `N` <= 100000, 점수 <= 100

---

## 풀이 방법

- DP
  ```Python3
  dp[i][0] = land[i][0] + max(dp[i-1][1], dp[i-1][2], dp[i-1][3])
  dp[i][1] = land[i][1] + max(dp[i-1][0], dp[i-1][2], dp[i-1][3])
  ...
  ```