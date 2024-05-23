/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.sum = Array.from(Array(matrix.length), () => []);
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let value = matrix[row][col];
            // 上面
            if (row > 0) {
                value += this.sum[row - 1][col];
            }
            // 左边
            if (col > 0) {
                value += this.sum[row][col - 1];
            }
            if (row > 0 && col > 0) {
                value -= this.sum[row - 1][col - 1];
            }
            this.sum[row][col] = value;
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let value = this.sum[row2][col2];
    if (col1 > 0) {
        value -= (this.sum[row2][col1 - 1]);
    }
    if (row1 > 0) {
        value -= (this.sum[row1 - 1][col2]);
    }

    if (col1 > 0 && row1 > 0) {
        value += this.sum[row1 - 1][col1- 1];
    }

    return value;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

