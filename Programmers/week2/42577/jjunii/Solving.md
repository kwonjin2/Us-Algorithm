# 📝 Solving: [42577 전화번호 목록](https://school.programmers.co.kr/learn/courses/30/lessons/42577)

## 문제 요약

- `phone_book`의 원소 중 다른 원소의 접두어가 있으면 `False`, 없으면 `Frue` return

---

## 풀이 방법

- `phone_book` 사전 순 정렬 => 접두어 후보는 맞닿아 있을 수 밖에 없음
- 인접한 원소와 비교하여 앞 번호가 뒷 번호의 접두사인지 확인
  - `phone_book[i] == phone_book[i+1][:len(phone_book[i])]`
- 접두어 발견 시, `False` return
- 모든 번호를 확인 후에도 미발견 시, `True` return