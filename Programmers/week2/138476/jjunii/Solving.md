# 📝 Solving: [138476 귤 고르기](https://school.programmers.co.kr/learn/courses/30/lessons/138476)

## 문제 요약

- 수확한 귤의 크기가 담긴 배열 `tangerine`
- 한 상자에 담으려는 귤의 개수 `k`
- 귤 `k`를 고를 때 크기가 서로 다른 종류의 수의 최솟값 return

---

## 풀이 방법

1. 귤의 크기에 따른 갯수 배열 `cnt_list` 생성 (index: 귤의 크기, value: 귤의 갯수)
2. 갯수가 큰 순서대로 내림차순 정렬
3. `k`개 카운트하며 종류 수 카운트

---

## 추가 메모

- `Counter` 사용
  ```Python
  from collections import Counter

  def solution(k, tangerine):
    counter = Counter(tangerine)
    
    answer = 0
    for size, cnt in counter.most_common():
        k -= cnt
        answer += 1
        if k <= 0:
            return answer
  ```
  - `Conter`: iterable 객체 내부의 요소들의 개수를 세어 딕셔너리 형태로 반환
  - `most_common()`: `Counter` 객체에 저장된 요소들을 개수가 많은 순서대로 정렬해 리스트 형태로 반환