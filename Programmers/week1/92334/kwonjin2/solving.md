# 📝 Solving: 신고 결과 받기 (92334)

## 문제 요약

- 각 유저는 다른 유저를 신고할 수 있고, 동일 유저에 대한 중복 신고는 1회로 처리
- k번 이상 신고당한 유저는 정지
- 정지된 유저를 신고한 모든 유저는 처리 결과 메일 1회씩 받음
- 최종적으로 각 유저가 받은 메일 횟수 반환

---

## 접근 방법

- 먼저 중복 제거를 위해 Set을 사용
- 그리고 이 set을 배열로 만들어서 반복문 돌리기 편하게 만듬
- 신고 당한 사람 횟수를 세기 위한 report_count, 각 유저가 받은 메일 횟수를 세기 위한 mailed_count을 id_list 길이만큼 0을 채움

- 먼저 report_count를 세기 위한 반복문을 순회해야함
- indexOf 메서드를 통해 신고당한 사람의 index를 id_list에서 찾고, report_count에 반영함
- 참고:
- arr[i].split(' ')[0] -> muzi (신고자)
- arr[i].split(' ')[1] -> frodo (피 신고자)

- 그리고 filter를 통해 k와 같거나 큰숫자를 걸러내서 banned 변수를 만듬 (true, false 형태로 저장)
- 이제 이 banned를 활용해서 banned[index] === true인 경우에 신고한 사람 카운트를 올려야하기에 반복문을 순회함
- 위 참고에 적힌것을 바탕으로 구조분해 할당을 통해 from, to 유저를 뽑아냄 from: 신고자, to: 피 신고자
- 이제 if문을 통해 banned[신고자idx]가 true인 경우엔 from유저의 index를 찾아 mailed_count에서 증가시킴
- 반복문 종료되면 mailed_count 반환
