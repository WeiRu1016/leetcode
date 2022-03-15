/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
// num = sum(a(i) * 10^i) = sum(a(i) * (10^i - 1 + 1)) = sum(a(i) * (10^i - 1) + a(i));
var addDigits = function(num) {
    const mod = num % 9;
    return mod || (num && 9);
};
// @lc code=end

