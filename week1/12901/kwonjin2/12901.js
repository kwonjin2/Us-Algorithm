function solution(a, b) {
  days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  month_days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 1, 3, 5, 7, 8, 10, 12 -> 31일
  // 4, 6, 9, 11 -> 30일
  // 2 -> 평년:28일, 윤년:29일

  let answer = 0;

  for (let i = 0; i < a - 1; i++) {
    answer += month_days[i];
  }

  answer += b - 1;

  return days[answer % 7];
}

console.log(solution(5, 24));
console.log(solution(1, 1));
console.log(solution(2, 1));
console.log(solution(3, 1));
console.log(solution(4, 1));
console.log(solution(12, 31));
