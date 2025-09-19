# 📝 Solving: [1844 게임 맵 최단거리](https://school.programmers.co.kr/learn/courses/30/lessons/1844)

## 문제 요약

- (0, 0) -> (n-1, m-1) 최단 거리 return
- 도착할 수 없을 경우 -1 return
- 0: 벽, 1: 길

---

## 풀이 방법

- 최단 거리 -> BFS -> 큐
- 주어진 maps에 움직인 거리 표시 -> `maps[nx][ny] == 1`인 경우만 방문
  - `maps[nx][ny] > 1`: 이미 방문한 칸 (visited)
  - `maps[nx][ny] == 0`: 벽