function solution(maps) {
  const totalRow = maps.length;
  const totalCol = maps[0].length;

  if (maps[0][0] === 0 || maps[totalRow - 1][totalCol - 1] === 0) {
    return -1;
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const distanceArray = Array.from({ length: totalRow }, () =>
    Array(totalCol).fill(-1)
  );
  distanceArray[0][0] = 1;

  const queue = [[0, 0]];
  let head = 0;

  while (head < queue.length) {
    const [currentRow, currentCol] = queue[head];
    head++;

    if (currentRow === totalRow - 1 && currentCol === totalCol - 1) {
      return distanceArray[currentRow][currentCol];
    }

    for (const [row, col] of directions) {
      const nextRow = row + currentRow;
      const nextCol = col + currentCol;

      if (
        nextRow >= 0 &&
        nextRow < totalRow &&
        nextCol >= 0 &&
        nextCol < totalCol &&
        maps[nextRow][nextCol] === 1 &&
        distanceArray[nextRow][nextCol] === -1
      ) {
        distanceArray[nextRow][nextCol] =
          distanceArray[currentRow][currentCol] + 1;
        queue.push([nextRow, nextCol]);
      }
    }
  }
  return -1;
}
