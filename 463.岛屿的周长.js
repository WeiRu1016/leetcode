/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sum = 0;
    const direction = [
        [-1, 0], // 上
        [0, 1], // 右
        [1, 0],// 下
        [0, 1]// 左
    ];
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                direction.forEach(([row, col]) => {
                    const x = i + row;
                    const y = j + col;
                    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0) {
                        sum += 1;
                    }
                })
            }
        }
    }
    return sum;
};
console.log(islandPerimeter([
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]
]));
// @lc code=end

