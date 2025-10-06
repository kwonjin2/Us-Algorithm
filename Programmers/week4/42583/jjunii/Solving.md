# 📝 Solving: [42583 다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

## 문제 요약

- `brige_length`: 다리에 트럭이 올라갈 수 있는 최대 개수 (1 이상, 10^4 이하)
- `weigth`: 다리가 견딜 수 있는 최대 무게 (1 이상, 10^4 이하)
- `truck_weightss`: 트럭 별 무게 (길이: 1 이상, 10^4 이하)
- 1 <= 모든 트럭의 무게 <= `weight`
- 이때 모든 트럭이 다리를 건너는 최소 시간 return

---

## 풀이 방법

- 모든 트럭이 다리위에 올라갈 때까지 반복 후, 마지막 트럭이 올라간 시간(`answer`) + 마지막 트럭이 건너는 시간(`breidge_length`) return
- `queue`: 다리의 길이만큼 0으로 채워 빈 다리 생성 후 시작
- 1초마다 `popleft()`로 다리의 맨 앞 칸에서 하나를 빼줌
- `total_weight`: 다리 위의 무게들의 총합
  - `pop`: - `out_weight`
  - `append`: + `in_weight`
- `total_weight` + 대기열 맨 앞의 트럭의 무게
  - <= `weight`: 트럭 진입 가능 -> append(truck)
  - > `weight`: 트럭 진입 불가능 -> append(0)