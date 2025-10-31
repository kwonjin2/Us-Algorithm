function solution(nums) {
  const pocketmon = new Set(nums);

  return Math.min(nums.length / 2, pocketmon.size);
}
