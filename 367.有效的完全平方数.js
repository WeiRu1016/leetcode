/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 0;
    let end = num;
    while(start <= end) {
        const mid = Math.floor((end + start) / 2);
        const value = mid * mid;
        if (value === num) {
            return true;
        }
        if (value > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(6));
// @lc code=end

