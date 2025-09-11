# 📝 Solving: [42840 모의고사](https://school.programmers.co.kr/learn/courses/30/lessons/42840)

## 문제 요약

- 1번 수포자: 1-2-3-4-5-...
- 2번 수포자: 2-1-2-3-2-4-2-5-...
- 3번 수포자: 3-3-1-1-2-2-4-4-5-5-...
- `answers` 배열이 주어졌을 때, 가장 높은 점수를 받은 사람 배열 return
- 여럿일 경우, 오름차순 정렬

---

## 풀이 방법

1. 각 수포자의 답변 패턴 생성
2. `answers`를 순회하며 나머지 연산을 이용해 답변 비교하여 `score` 채점
3. `max(score)`와 동일한 점수를 가진 수포자 배열 반환

---

## 추가 메모

- list comprehension 적용
    ```Python
    return [i + 1 for i, s in enumerate(score) if s == max(score)]
    ```