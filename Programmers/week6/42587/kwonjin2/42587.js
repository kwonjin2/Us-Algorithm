function solution(priorities, location) {
  const queue = priorities.map((priority, idx) => [priority, idx]);

  let count = 0;

  while (queue.length) {
    const [priority, idx] = queue.shift();
    if (priority >= Math.max(...queue.map((val) => val[0]))) {
      count++;
      if (idx === location) return count;
    } else queue.push([priority, idx]);
  }
}
