function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      let helper = land[i - 1].filter((v, i) => i !== j);
      land[i][j] += Math.max(...helper);
    }
  }

  return Math.max(...land[land.length - 1]);
}
