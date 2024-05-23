/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let dp = matrix[matrix.length - 1];

    for (let i = matrix.length - 2; i >= 0; i--) {
        const temp = [];
        for (let j = 0; j < matrix[i].length; j++) {
            let min = dp[j];
            if (j > 0) {
                min = Math.min(min, dp[j - 1]);
            }
            if (j < matrix[i].length - 1) {
                min = Math.min(min, dp[j + 1]);
            }
            temp[j] = matrix[i][j] + min;
        }
        dp = temp;
    }

    return Math.min.apply(null, dp);
};
console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]));
console.log(minFallingPathSum([[-19,57],[-40,-5]]));
// @lc code=end

