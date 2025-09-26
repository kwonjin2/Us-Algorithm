# 📝 Solving: [92341 주차 요금 계산](https://school.programmers.co.kr/learn/courses/30/lessons/92341)

## 문제 요약

- fees(정수 배열): 기본 시간, 기본 요금, 단위 시간, 단위 요금
- records(문자열): 시각(HH:MM), 차량 번호(길이 4), 내역(IN/OUT) *각 내역은 공백으로 구분, 시각 기준 오름차순 정렬
- 출차 내역 X -> 23:59 출차로 간주
- 초과 시간이 단위 시간으로 나누어 떨어지지 않으면, 올림

---

## 풀이 방법

- key: `car_num`, value: 입출차 시간(입차일 경우 *(-1): 출차시간 - 입차시간 = 주차시간)
- `len(cars[car_num])`이 홀수라면, 마지막 출차 기록 X -> 23:59 출차 기록 추가
- `sum(cars[car])` = 총 주차 시간
- `cal(fees, time)`: `fees` 기반으로 총 `time`의 시간동안 주차했을 때의 요금 return
  - `basic_time`보다 `time`이 작으면, `basic_fee`
  - 아니면, `basic_fee` + (`time` - `basic_time`)만큼 `unit_fee`
  
  
---  

## 추가 메모

- `solution()`: 공간복잡도가 O(n), n: `recods`의 길이
- `solution_2()`: dictionary를 두 개로 분리해서 실시간으로 주차 시간 누적 계산 -> 공간복잡도 O(c), c: car의 수