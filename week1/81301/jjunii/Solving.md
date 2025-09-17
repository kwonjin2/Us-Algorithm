# 📝 Solving: [81301 숫자 문자열과 영단어](https://school.programmers.co.kr/learn/courses/30/lessons/81301)

## 문제 요약

- 문자열 `s`가 의미하는 원래 숫자 return
- 이때 `s`는 숫자의 일부 자릿수를 영단어로 변경되었을 수 있음
- `s`가 "zero"나 "0"으로 시작하는 경우 X
- 숫자 - 영단어 대응표는 아래와 같음
  |숫자 | 영단어 |
  | :--- | :----- |
  | 0    | zero   |
  | 1    | one    |
  | 2    | two    |
  | 3    | three  |
  | 4    | four   |
  | 5    | five   |
  | 6    | six    |
  | 7    | seven  |
  | 8    | eight  |
  | 9    | nine   |

---

## 풀이 방법

- 숫자 - 영단어 대응표를 dict 형태로 활용 (key: 영단어, value: 숫자)    **list로도 가능(idx: 숫자, value: 영단어)*
- 영단어가 문자열에 존재할 경우, `s.replace(영단어, 숫자)`