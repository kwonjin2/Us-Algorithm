def solution(s):
    al_num = {"zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"}
    
    for al in al_num:
        if al in s:
            print(al, al_num[al])
            s = s.replace(al, al_num[al])
            
    return int(s)