function solution(s) {
  let count = 0;

  for (let i of s) {
    if (count < 0) return false;
    if (i === "(") {
      count++;
    } else {
      count--;
    }
  }

  return count === 0 ? true : false;
}
