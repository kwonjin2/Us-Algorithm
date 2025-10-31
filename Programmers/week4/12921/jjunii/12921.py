def solution(n):
    num = [True] * (n + 1)
    
    answer = 0
    for i in range(2, n+1):
        if not num[i]:
            continue
            
        answer += 1
        for j in range(i, n+1, i):
            num[j] = False
    
    return answer