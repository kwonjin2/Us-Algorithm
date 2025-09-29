function solution(board, h, w) {
  let currentColor = board[h][w];

  let count = 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (const [row, col] of directions) {
    const currentRow = row + h;
    const currentCol = col + w;

    if (
      currentRow >= 0 &&
      currentRow < board.length &&
      currentCol >= 0 &&
      currentCol < board[0].length
    ) {
      if (board[currentRow][currentCol] === currentColor) {
        count++;
      }
    }
  }

  return count;
}

// ------------------ 테스트 케이스 ------------------

const tests = [
  {
    board: [
      ["blue", "red", "orange", "red"],
      ["red", "red", "blue", "orange"],
      ["blue", "orange", "red", "red"],
      ["orange", "orange", "red", "blue"],
    ],
    h: 1,
    w: 1,
    expected: 2,
  },
  {
    board: [
      ["yellow", "green", "blue"],
      ["blue", "green", "yellow"],
      ["yellow", "blue", "blue"],
    ],
    h: 0,
    w: 1,
    expected: 1,
  },
  // 왼쪽 위 모서리
  {
    board: [
      ["red", "red"],
      ["blue", "red"],
    ],
    h: 0,
    w: 0,
    expected: 1,
  },
  // 오른쪽 아래 모서리
  {
    board: [
      ["red", "blue"],
      ["blue", "red"],
    ],
    h: 1,
    w: 1,
    expected: 0,
  },
  // 가운데 칸, 모든 이웃 같은 색
  {
    board: [
      ["red", "red", "red"],
      ["red", "red", "red"],
      ["red", "red", "red"],
    ],
    h: 1,
    w: 1,
    expected: 4,
  },
  // 가운데 칸, 모든 이웃 다른 색
  {
    board: [
      ["red", "blue", "green"],
      ["yellow", "orange", "purple"],
      ["pink", "gray", "brown"],
    ],
    h: 1,
    w: 1,
    expected: 0,
  },
  // 보드 1x1
  {
    board: [["red"]],
    h: 0,
    w: 0,
    expected: 0,
  },
  // 일부 이웃만 같은 색
  {
    board: [
      ["red", "red", "blue"],
      ["blue", "red", "green"],
      ["yellow", "blue", "red"],
    ],
    h: 1,
    w: 1,
    expected: 1,
  },
  // 대각선만 같은 색 (상하좌우는 다른 색)
  {
    board: [
      ["red", "blue", "red"],
      ["blue", "red", "blue"],
      ["red", "blue", "red"],
    ],
    h: 1,
    w: 1,
    expected: 0,
  },
  // 2x2 보드, 상하좌우 일부 같은 색
  {
    board: [
      ["green", "green"],
      ["green", "blue"],
    ],
    h: 0,
    w: 0,
    expected: 2,
  },
];

// ------------------ 테스트 실행 ------------------

tests.forEach((test, idx) => {
  const result = solution(test.board, test.h, test.w);
  if (result === test.expected) {
    console.log(`Test ${idx + 1} : ${result} -> OK`);
  } else {
    console.log(
      `Test ${idx + 1} : expected ${test.expected}, but got ${result} -> X`
    );
  }
});
