# 📝 Solving: [12918 문자열 다루기 기본](https://school.programmers.co.kr/learn/courses/30/lessons/12918)

## 문제 요약

- 문자열 s의 길이: 4 or 6
- 숫자로만 구성 
- 두 조건 모두 만족 시, True

---

## 풀이 방법

```Python
if len(s) in [4, 6] and s.isdigit():
    return True
return False
```

---

## 추가 메모

- `.isdigit()`: 문자열이 숫자
- `.isalpha()`: 문자열이 알파벳
- `.isalnum()`: 문자열이 숫자/알파벳