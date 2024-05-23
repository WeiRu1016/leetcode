/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
    // let index = 0;
    // let count = 1;
    // while(n > count) {
    //     index += 1;
    //     count += index + 1;
    // }
    // return index;
};
// @lc code=end

