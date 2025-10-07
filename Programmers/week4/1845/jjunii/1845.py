def solution(nums):
    n = len(nums)
    m = len(set(nums))
    return m if m <= n/2 else n/2