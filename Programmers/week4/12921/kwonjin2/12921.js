function solution(n) {
  const primeArray = Array.from({ length: n + 1 }).fill(true);
  primeArray[0] = false;
  primeArray[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (primeArray[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeArray[j] = false;
      }
    }
  }
  return primeArray.filter((val) => val !== false).length;
}
