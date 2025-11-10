# 📝 Solving: 카펫 (42842)

## 문제 요약
- 카펫은 갈색 테두리(brown)와 노란 영역(yellow)으로 이루어져 있다.
- 갈색과 노란색 칸의 수(brown, yellow)가 주어질 때, 카펫의 가로와 세로 길이를 구하라.
- 단, 카펫의 가로 길이 >= 카펫의 세로 길이이다.

## 접근 방법

- 이 문제에서는 약수를 사용해서 풀 수 있다. 
- 전체 카펫의 가로와 세로는 total의 약수 쌍으로 표현할 수 있다. 문제에서는 해당 카펫의 가로와 세로를 return하라고 했는데, 해당 카펫의 가로 * 세로는 무조건 total이 되기 때문이다.


- 먼저, brown + yellow를 해서 총 직사각형이 얼마인지 구해준다.
- 그리고 그 직사각형의 약수를 구해준다.
- for문을 통해 1부터 약수의 길이만큼 1씩 증가하며 반복하게 만들어주고 아래와 같은 로직을 넣는다.
    - height = 약수[1]이다.
    - width = total(전체 카펫 크기) / height이다.
        - 이러면 height와 width는 약수의 짝이 된다. 
            - total = 12일 때, 약수는 [1,2,3,4,6,12];
            - height가 1일때 width는 12, height가 2일땐, width = 6... 이런식으로
    
    - 이제 각 약수의 짝으로 노란 영역을 구해서 실제 yellow와 일치하는지 확인해야 한다.
        <details> 

        <summary>노란 영역 구하는 방식</summary>

        - 이 문제를 풀기 위해서 먼저, 갈색 테두리 안에 노란 영역이 있는데, 이 노란 영역의 칸 수를 구하는 방식은 다음과 같다.
            ```bash
            // !를 제외한 나머지는 갈색테두리, !가 노란영역이라 가정하자.
            @@@@      ← 위쪽 테두리
            1!!2
            3!!4
            @@@@      ← 아래쪽 테두리
            ```
        - 위쪽과 아래쪽 테두리 제거 -> 세로 방향에서 한 줄씩 제거 (height - 2)
            ```bash
            1!!2
            3!!4
            ```
        - 좌우 테두리 제거 -> 가로 방향에서 한 칸씩 제거 (width - 2)
            ```bash
            !!
            !!
            ```
        - 남은 노란 영역의 칸 수는 직사각형으로 이루어져 있으니
            ```js
            노랭이 = (width -2) * (height -2 ); 
            ```
            라고 볼 수 있다.
        </details>

    - 다시 돌아와서 해당 영역이 실제 yellow와 같다면 return [width, height]를 해준다.


### 완탐 버전 풀이
<details>
<summary>풀이</summary>

```js
function solution(brown, yellow) {
    const total = brown + yellow;

    for (let height = 3; height <= total; height++) {
        for (let width = height; width <= total; width++) {
            if ((width - 2) * (height - 2) === yellow && width * height === total) {
                return [width, height];
            }
        }
    }
}
```
- height가 3부터 시작하는 이유는 노란영역이 갈색테두리에 둘러쌓여져 있는 최소 height와 width가 3이기 때문

    - 000
    - 0!0
    - 000
    이렇겡

- height는 3부터 total까지 반복
- width는 height부터 total까지 반복 -> 가로 >= 세로 조건 만족
- width와 height로 구한 노란 영역이 yellow와 같고, width * height === total이라면

- [width, height]반환
</details>
