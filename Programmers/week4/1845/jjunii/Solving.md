# 📝 Solving: [1845 포켓몬](https://school.programmers.co.kr/learn/courses/30/lessons/1845)

## 문제 요약

- `nums`: N마리 포켓몬의 종류 번호가 담긴 배열
- N/2마리의 포켓몬 선택 시, 최대 포펫몬 종류 번호의 개수 return
- 1 <= `len(nums)` <= 10^4, 항상 짝수
- 1 <= 포켓몬의 종류 번호 <= 2*10^5

---

## 풀이 방법

- `nums`를 `set`로 만들어 중복 제거 -> 배열 속 종류 번호의 개수(`m`)
- `m` <= N/2, `m` 종류 선택 가능
- `m` > N/2, N/2 종류 선택 가능