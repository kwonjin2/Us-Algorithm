from collections import deque

def is_correct(str):
    pairs = {')': '(', ']': '[', '}': '{'}
    
    stack = []
    for c in str:
        if c in ['(', '[', '{']:
            stack.append(c)
        elif stack and stack[-1] == pairs[c]:
            stack.pop()
        else:
            return False
        
    return False if stack else True

def solution(s):
    answer = 0
    s = deque(s)
    for i in range(len(s)):
        s.rotate(-1)
        
        if s[0] not in ['(', '[', '{']:
            continue
            
        if is_correct(s):
             answer += 1
    return answer