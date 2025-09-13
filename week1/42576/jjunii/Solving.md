# 📝 Solving: [42567 완주하지 못한 선수](https://school.programmers.co.kr/learn/courses/30/lessons/42576)

## 문제 요약

- `participant`: 마라톤에 참여한 선수들
- `completion`: 완주한 선수들
- 완주하지 못한 선수(한 명)의 이름 return
- 동명이인 고려

---

## 풀이 방법

- 두 배열 sort 후 순회하며 비교
- `completion` 끝까지 return이 없다면 마지막 남은 `participant`가 return

---

## 추가 메모

- `set(paricipant) - set(completion)`: 동명이인 구분 불가