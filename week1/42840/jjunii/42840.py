def solution(answers):
    person1 = [1, 2, 3, 4, 5]   # 5
    person2 = [2, 1, 2, 3, 2, 4, 2, 5]  # 8
    person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]    #10
    
    score = [0]*3
    for i, answer in enumerate(answers):
        if person1[i % 5] == answer:
            score[0] += 1
        if person2[i % 8] == answer:
            score[1] += 1
        if person3[i % 10] == answer:
            score[2] += 1

    result = []
    for i, s in enumerate(score):
        if s == max(score):
            result.append(i + 1)
    
    return result