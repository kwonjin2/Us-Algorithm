function solution(x, y, n) {
  const queue = [[x, 0]];
  let head = 0;
  const set = new Set();

  while (head < queue.length) {
    const [currentNum, count] = queue[head++];

    if (currentNum === y) return count;

    for (let value of [currentNum + n, currentNum * 2, currentNum * 3]) {
      if (value <= y && !set.has(value)) {
        set.add(value);
        queue.push([value, count + 1]);
      }
    }
  }

  return -1;
}
