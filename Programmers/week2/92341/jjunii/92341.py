import math

def cal(fees, time):
    basic_time, basic_fee, unit_time, unit_fee = fees
    if time <= basic_time:
        return basic_fee
    else:
        return basic_fee + math.ceil((time - basic_time) / unit_time) * unit_fee

# 모든 입출차 시간 기록 후, 총 시간 계산
def solution(fees, records):
    cars = {}
    for record in records:
        time, car_num, check = record.split()
        hour, min = time.split(':')
        mins = (60 * int(hour) + int(min)) * (1 if check == "OUT" else -1)
        if car_num in cars:
            cars[car_num].append(mins)
        else:
            cars[car_num] = [mins]
    print(cars)
    
    for car in cars:
        if len(cars[car]) % 2 == 1: # 출차 기록 X
            cars[car].append(60 * 23 + 59)
        cars[car] = cal(fees, sum(cars[car]))

    answer = []
    sorted_keys = sorted(cars.keys())
    for key in sorted_keys:
        answer.append(cars[key])
    return answer


# 실시간으로 주차 시간 누적 계산
def solution_2(fees, records):
    cars, times = {}, {}
    for record in records:
        time, car_num, check = record.split()
        hour, min = time.split(':')
        mins = (60 * int(hour) + int(min))
        if car_num in cars: # 출차
            times[car_num] += mins - cars[car_num]
            cars.pop(car_num)
        else:   # 입차
            cars[car_num] = mins
            if car_num not in times:
                times[car_num] = 0
        print(cars)
    
    last = 60 * 23 + 59
    for car in cars:
        times[car] += last - cars[car]

    answer = []
    sorted_keys = sorted(times.keys())
    for key in sorted_keys:
        answer.append(cal(fees, times[key]))
    return answer