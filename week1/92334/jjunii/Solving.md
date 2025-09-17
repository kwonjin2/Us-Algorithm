# 📝 Solving: [92334 신고 결과 받기](https://school.programmers.co.kr/learn/courses/30/lessons/92334)

## 문제 요약

- `id_list`: 이용자의 ID 배열
- `repoet`: 각 이용자가 신고한 이용자의 ID 배열
- `k`: 정지 기준 신고 횟수
- => 각 유저별로 처리 결과 메일을 받은 횟수 배열 return(`id_list` id 순서로 정렬)
- 각 유저는 한 번에 한 명만 신고 가능 => 동일 유저에 대한 신고 횟수 미반영
- k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 메일 발송

---

## 풀이 방법

1. `report_dict`(key: 신고 당한 ID, value: 신고한 ID) 생성
    - `report` -> `set`: 중복 신고 소거
    - 신고 당한 ID가 key로 이미 존재하면, 신고한 ID를 value 배열에 추가
    - 신고 당한 ID가 key에 없으면(최초 신고), 신고한 ID로 value 배열 생성
2. `mail_dict`(key: `id_list`, value: 메일 수신 횟수)
    - `report_dict`에서 신고 당한 ID의 value 수(신고한 ID) >= k이면, 정지 및 신고한 ID에게 메일 발송 => 메일 수신 횟수 += 1

---

## 추가 메모

- 리스트를 키로 가지고 모든 값이 0인 딕셔너리 생성
    1. dictionary comprehension
        ```Python
        mail_dict = {key: 0 for key in id_list}
        ```
    2. `dict.fromkeys()`
        ```Python
        mail_dict = dict.fromkeys(id_list, 0)
        ```
    *모든 값을 동일하게 설정하는 특정 목적

- `return mail_dict.values()`
    - **`TypeError: Object of type dict_values is not JSON serializable`**
    - `.values()` 메서드는 `dict_values`라는 뷰 객체 반환, 리스트 X
    - => `list(mail_dict.values())`: list로 감싸 반환