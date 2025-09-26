# 📝 Solving: [154538 숫자 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/154538)

## 문제 요약

- 자연수 `x` -> `y` 변환에 필요한 최소 연산 횟수 return
- 변환할 수 없다면, -1 return
- 변환에 사용할 수 있는 연산
  - `x` + `n`
  - `x` * 2
  - `x` * 3
- 1 <= `x` <= `y` <= 10^6
- 1 <= `n` < `y`

---

## 풀이 방법

- `solution()`: DP
  - 각 숫자의 테이블에 연산 횟수 기록하며 전진 => DP
  - `if not cnt[i]`: `x`가 연산으로 갈 수 없는 숫자이므로 `continue`
  - 숫자가 절대 작아질 수 없음 -> `y`보다 커지면 연산 불필요 -> `if num <= y` 조건 확인
  - `cnt[num]`에 이미 숫자가 있으면, 더 작은 값(최소 연산) 기록
  - `cnt[num]`이 비어있으면, 첫 방문이므로 `cnt[i] + 1`

- `solution_2()`: BFS
  1. `x`를 `queue`에 넣고 시작
  2. `queue`에서 현재 레벨의 모든 숫자를 꺼내, 다음으로 갈 수 있는 숫자들을 `queue`에 추가
  3. 한 레벨의 탐색이 끝나면 `cnt += 1` 후, 2번으로 다시 반복
  4. `y`에 도착하면 종료
  - `if next_num <= y`: 숫자가 절대 작아질 수 없음 -> `y`보다 커지면 연산 불필요 -> `queue`에 추가할 필요 X
  - `next_num not in visited`: `next_num`을 이미 방문했음 == 더 작은 cnt일 때 이미 지나갔음