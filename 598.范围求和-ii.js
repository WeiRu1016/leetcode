/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let max = 0;
    let count = m * n;
    const array = Array.from(Array(m), () => Array(n).fill(0));
    ops.forEach(([ai, bi]) => {
        for (let i = 0; i < Math.min(ai, m); i++) {
            for (let j = 0; j < Math.min(bi, n); j++) {
                array[i][j] += 1;
                if (array[i][j] > max) {
                    max = array[i][j];
                    count = 1;
                } else if (array[i][j] === max) {
                    count += 1;
                }
            }
        }
    });
    return count;
};
console.log(maxCount(3, 3, [[2, 2], [3, 3]]));
// @lc code=end

