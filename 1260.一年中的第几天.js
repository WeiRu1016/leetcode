/*
 * @lc app=leetcode.cn id=1386 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const rows = grid.length;
    const cols = grid[0].length;
    const size = rows * cols;
    k = k % size;
    const temp = [];
    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 0; j--) {
            if (temp.length === k) {
                const step = (i * cols + j + k) % size;
                const _row = Math.floor(step / cols);
                const _col = step % cols;
                grid[_row][_col] = grid[i][j];
            } else {
                temp.push(grid[i][j]);
            }
        }
    }
    for (let i = 0; i < k; i++) {
        const _row = Math.floor(i / cols);
        const _col = i % cols;
        grid[_row][_col] = temp[k - 1 - i];
    }
    return grid;
};
// console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1));
// console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4));
// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9))
// console.log(shiftGrid([
//     [1],
//     [2],
//     [3],
//     [4],
//     [7],
//     [6],
//     [5]
// ], 23)); // [[6],[5],[1],[2],[3],[4],[7]]
console.log(shiftGrid([
    [3,8,1,9],
    [19,7,2,5],
    [4,6,11,10],
    [12,0,21,13]
], 4));
// console.log(shiftGrid([
//     [3,8,1,9],
//     [19,7,2,5],
//     [4,6,11,10],
//     [12,0,21,13]
// ], 4));
// @lc code=end

