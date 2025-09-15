# 📝 Solving: 숫자 문자열과 영단어 (81301)

## 문제 요약

- 1478 → "one4seveneight"
- 234567 → "23four5six7"
- 10203 → "1zerotwozero3"

- 입출력 예
  s : result
  "one4seveneight" : 1478
  "23four5six7" : 234567
  "2three45sixseven" : 234567
  "123" : 123

---

## 접근 방법

- 숫자와 대응되는 영단어는 0 -> "zero", 1 -> "one"... 이런식으로 9까지 대응된다.
- 먼저 numberWords 배열을 만들어서 ["zero", "one" ...]으로 초기화 해준다. 어차피 인덱스 0부터 시작해서 배열 사용했다.
- 그 다음 반복문에 필요한 helper 변수를 만들어준다. (또한 결과를 담을 result 변수도 만들어줬다.)
- 이제 for문으로 s를 순회하며 만약 i가 숫자가 아니라면 helper 변수에 추가해준다. 그리고 그 helper 변수가 numberWords에 포함되어있다면 (includes메서드)
- numberWords의 index값을 result 변수에 넣어주고 다시 helper 변수를 ''(빈공백)로 할당해준다.
- 만약 i가 숫자라면 바로 result변수에 넣어준다.

- 마지막으로 result 변수를 숫자로 변환해서 반환해준다.
