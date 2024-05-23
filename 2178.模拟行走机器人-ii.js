/*
 * @lc app=leetcode.cn id=2279 lang=javascript
 *
 * [2178] 拆分成最多数目的偶整数之和
 */

// @lc code=start
/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2) {
        return [];
    }
    let step = 2;
    let sum = 0;
    const result = [];
    while(finalSum > sum) {
        result.push(step);
        sum += step;
        step += 2;
    }
    if (finalSum < sum) {
        const index = (sum - finalSum) / 2 - 1;
        result.splice(index, 1);
    }
    return result;
};
console.log(maximumEvenSplit(12));
// @lc code=end

