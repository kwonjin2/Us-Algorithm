from collections import deque

def solution(bridge_length, weight, truck_weights):
    queue = deque([0]*bridge_length)    # bridge
    total_weight, answer = 0, 0         # total_weight on bridge
    trucks = deque(truck_weights)
    
    while trucks:
        out_weight = queue.popleft()
        total_weight -= out_weight
        answer += 1
        
        if total_weight + trucks[0] <= weight:
            in_weight = trucks.popleft()
            queue.append(in_weight)
            total_weight += in_weight
        else:
            queue.append(0)

    return answer + bridge_length