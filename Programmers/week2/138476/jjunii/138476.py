def solution(k, tangerine):
    cnt_list = [0] * (max(tangerine) + 1)
    for size in tangerine:
        cnt_list[size] += 1
        
    cnt_list.sort(reverse = True)
    
    answer = 0
    for cnt in cnt_list:
        answer += 1
        k -= cnt
        if k <= 0:
            return answer