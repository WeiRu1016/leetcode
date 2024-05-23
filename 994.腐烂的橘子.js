/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const row = grid.length;
  const col = grid[0].length;

  let refresh = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        refresh += 1;
      }
    }
  }

  let min = 0;
  while (refresh > 0) {
    let prevRefresh = refresh;
    let nextGrid = grid.map((item) => [...item]);
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (grid[i][j] === 2) {
          [
            [-1, 0], // 上
            [0, 1], // 右
            [1, 0], // 下
            [0, -1], // 左
          ].forEach((pos) => {
            const x = i + pos[0];
            const y = j + pos[1];
            if (
              x >= 0 &&
              x < row &&
              y >= 0 &&
              y < col &&
              grid[x][y] === 1 &&
              nextGrid[x][y] === 1
            ) {
              nextGrid[x][y] = 2;
              refresh -= 1;
            }
          });
        }
      }
    }
    grid = nextGrid;
    min += 1;
    if (prevRefresh === refresh) {
      return -1;
    }
  }
  return min;
};
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
console.log(orangesRotting([[0, 2]]));
console.log(orangesRotting([[1, 2]]));
// @lc code=end
