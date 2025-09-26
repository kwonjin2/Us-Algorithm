def solution(board, h, w):
    N = len(board)
    color = board[h][w]
    answer = 0
    
    for dh, dw in [(-1, 0), (1, 0), (0, -1), (0, 1)]:   # 상하좌우
        nh, nw = h + dh, w + dw
        if 0 <= nh < N and 0 <= nw < N:
            if board[nh][nw] == color:
                answer += 1
                
    return answer