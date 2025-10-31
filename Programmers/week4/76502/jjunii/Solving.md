# 📝 Solving: [76502 괄호 회전하기](https://school.programmers.co.kr/learn/courses/30/lessons/76502)

## 문제 요약

- `s`: 대괄화, 중괄호, 소괄호로 이루어진 문자열
- `s`를 왼쪽으로 x (0 ≤ x < `s`의 길이) 칸만큼 회전시켰을 때, `s`가 올바른 괄호 문자열이 되게 하는 x의 개수를 return
- 1 <= `len(s)` <= 10^3

---

## 풀이 방법

- `len(s)`가 10^3 이하이므로 `O(n^2)` 가능 => 모든 회전의 경우(`O(n)`)에 대해 `is_correct()`(`O(n)`) 판단 가능
- `rotate()`를 사용해 회전 구현 후, 각 경우에 대해 `is_correct()` 호출
- Optional) 불필요한 검사 방지를 위해 문자열의 가장 처음이 여는 괄호가 아닐 경우 `continue`
- `is_correct()`: 올바른 괄호 검사
  - 여는 괄호일 경우, `stack.append()`
  - 닫는 괄호일 경우,
    - 짝이 맞으면, 짝인 여는 괄호를 `pop()`
    - 짝이 맞지 않으면(`stack`이 비어있거나 `pairs`의 짝이 다르면), return False
  - 모든 문자열을 검사했는데 `stack`이 남아있다 == 짝이 맞지 않는 괄호가 존재 => return False