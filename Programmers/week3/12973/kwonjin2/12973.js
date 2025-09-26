function solution(s) {
  const stack = [];

  for (let i of s) {
    if (i === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(i);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
