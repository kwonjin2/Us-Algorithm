# 📝 Solving: [64061 크레인 인형뽑기 게임](https://school.programmers.co.kr/learn/courses/30/lessons/64061)

## 문제 요약

- `board`: 인형뽑기 판으로 n x n 배열 (5 <= n <= 30)
- `board`의 각 칸에는 0 이상 100 이하의 정수
  - 0: 빈 칸
  - 1 ~ 100: 인형의 종류
- `moves`: 인형을 뽑을 크레인 위치의 순서 배열(`board`의 column 값)
  - 1 <= `len(moves)` <= 10^3
- 크레인으로 인형을 뽑은 후 바구니로 이동 -> 바구니의 가장 아래 칸부터 인형이 순서대로 쌓임
- 만약 ㅏㅌ은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라짐
- 최종적으로 터트려져 사라진 인형의 ㅐ수 return

---

## 풀이 방법

1. `board`를 인형 뽑기에 적합하게 queue로 재구성
  - `board_list[c]`는 `board`에서 c번 열의 인형들을 담고 있는 queue
  - queue의 맨 앞이 가장 위의 인형
2. `moves`에 따라 지정된 열의 queue에서 `popleft()`로 인형을 꺼냄
  - `if not board_list[m]`: 인형이 없는 곳에서 크레인 작동 시 아무 일 X -> `continue`
3. `basket`(stack)의 맨 위 인형과 비교
  - 두 인형이 같으면, `basket.pop()`으로 바구니 인형 제거 후 점수 +2
  - 두 인형이 다르면, `basket.append(item)`으로 바구니에 뽑은 인형 추가