# 📝 Solving: [159994 카드 뭉치](https://school.programmers.co.kr/learn/courses/30/lessons/159994)

## 문제 요약

- `cards1`과 `cards2`의 단어들로 `goal`을 만들 수 있으면 "Yes", 없으면 "No" return
- 주어진 카드 뭉치 내의 순서대로만 사용 가능
- 한 번 사용 시 재사용 불가
- 반드시 사용 후 다음 카드로 넘어갈 수 있음

---

## 풀이 방법

- `cards1`과 `cards2`의 인덱스 변수를 가지고 `goal`에 해당하는 단어 있는지 확인
- 있으면 해당하는 배열의 인덱스만 +1
- 없으면 바로 "No" return