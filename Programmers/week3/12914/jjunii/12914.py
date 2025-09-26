# 반복문 DP
def solution(n):
    a, b = 1, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    return b % 1234567


# 재귀 DP
def recursion(x):
    global dp
    if x <= 1:
        return 1
    
    if dp[x]:
        return dp[x]
    
    dp[x] = recursion(x - 2) + recursion(x - 1)
    return dp[x]
    
def solution_2(n):
    global dp
    dp = [0] * (n + 1)
    return recursion(n) % 1234567