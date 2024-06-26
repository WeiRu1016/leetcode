/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false
    }
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            sum = sum + i + (num / i);
        }
    }
    return sum === num;
};
console.log(checkPerfectNumber(28));
// @lc code=end

