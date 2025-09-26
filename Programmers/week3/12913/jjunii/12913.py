# for문
def solution(land):
    for i in range(1, len(land)):
        for j in range(4):
            x = land[i][j]
            for k in range(4):
                if j == k:
                    continue
                land[i][j] = max(land[i][j], x + land[i-1][k])
                        
    return max(land[-1])


# 슬라이싱
def solution_2(land):
    for i in range(1, len(land)):
        for j in range(4):
            land[i][j] += max(land[i-1][:j] + land[i-1][j+1:])
                        
    return max(land[-1])