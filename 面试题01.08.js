// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

//  

// 示例 1：
// 输入：
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// 输出：
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// 示例 2：

// 输入：
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 输出：
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = Array(matrix.length).fill(false);
    const cols = Array(matrix[0].length).fill(false);

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cols.length; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                cols[j] = true;
            }
        }
    }

    for (let i = 0; i < rows.length; i++) {
        if (rows[i]) {
            for (let j = 0; j < cols.length; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 0; j < cols.length; j++) {
        if (cols[j]) {
            for (let i = 0; i < rows.length; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

console.log(
    setZeroes([
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ])
)