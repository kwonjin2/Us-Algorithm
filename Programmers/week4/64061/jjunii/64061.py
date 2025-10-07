from collections import deque
    
def solution(board, moves):
    n = len(board)
    basket = []     #stack
    
    board_list = [deque([]) for _ in range(n)]  # idx: 크레인 위치, value: 인형 배열
    for r in range(n):
        for c in range(n):
            if board[r][c] == 0:
                continue
            board_list[c].append(board[r][c])
    
    cnt = 0
    for m in [m - 1 for m in moves]:    # 1-based -> 0-based
        if not board_list[m]:
            continue
            
        item = board_list[m].popleft()
        if basket and basket[-1] == item:
            basket.pop()
            cnt += 2
        else:
            basket.append(item)
    
    return cnt