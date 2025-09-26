# DP
def solution(x, y, n):
    cnt = [0] * (y + 1)
    cnt[x] = 1

    for i in range(x, y):
        if not cnt[i]:
            continue

        for num in [i + n, i * 2, i * 3]:
            if num <= y:
                if cnt[num]:
                    cnt[num] = min(cnt[num], cnt[i] + 1)
                else:
                    cnt[num] = cnt[i] + 1

    return cnt[y] - 1 if cnt[y] else -1


#BFS
from collections import deque

def solution_2(x, y, n):
    cnt = 0
    queue = deque([x])
    visited = {x}   # set에서 in: O(1)
    while queue:
        for _ in range(len(queue)):
            num = deque.popleft(queue)
            if num == y:
                return cnt
            
            for next_num in [num + n, num * 2, num * 3]:
                if next_num <= y and next_num not in visited:
                    queue.append(next_num)
                    visited.add(next_num)
        cnt += 1
    return -1