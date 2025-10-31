# 📝 Solving: [12909 올바른 괄호](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

## 문제 요약

- '(' 또는 ')'로만 이루어진 문자열 `s`가 주어졌을 때, 문자열 `s`가 올바른 괄호이면 true, 아니면 false return
- n <= 100000

---

## 풀이 방법

- '(' -> `stack.append()`
- ')'
  - `stack`이 비어있는 경우: 짝이 없음 => False
  - `stack`이 비어있지 않은 경우: 짝이 있음 => 짝인 괄호 `pop()`
- `stack`이 비어있지 않으면, 짝이 없는 '(' 존재 => False