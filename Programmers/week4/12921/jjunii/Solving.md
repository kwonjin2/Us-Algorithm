# 📝 Solving: [12921 소수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/12921)

## 문제 요약

- 1부터 `n` 사이에 있는 소수의 개수 return
- 2 <= `n` <= 10^6

---

## 풀이 방법

- `num`: 소수는 `True`인 배열
- 2부터 시작 -> 소수(`True`)인 경우, 그 수의 모든 배수를 `False`로 변경 (배수는 소수 X) & `answer += 1`