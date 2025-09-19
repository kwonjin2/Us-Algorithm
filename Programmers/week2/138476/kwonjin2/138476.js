function solution(k, tangerine) {
  const count = {};

  for (let i = 0; i < tangerine.length; i++) {
    count[tangerine[i]] = (count[tangerine[i]] || 0) + 1;
  }

  const counts = Object.values(count).sort((a, b) => b - a);

  let sum = 0;
  let kinds = 0;

  for (let c of counts) {
    sum += c;
    kinds++;
    if (sum >= k) break;
  }

  return kinds;
}
