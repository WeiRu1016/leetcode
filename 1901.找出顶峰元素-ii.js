/*
 * @lc app=leetcode.cn id=1901 lang=javascript
 *
 * [1901] 找出顶峰元素 II
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const value = mat[i][j];
            // 上下左右
            const isMax = [
                [i - 1, j],
                [i, j + 1],
                [i + 1, j],
                [i, j - 1],
            ].every(([x, y]) => {
                if (x >= 0 && x < m && y >= 0 && y < n) {
                    return value > mat[x][y];
                }
                return value > -1;
            });
            if (isMax) {
                return [i, j];
            }
        }
    }
};
// @lc code=end

