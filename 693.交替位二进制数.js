/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let num;
    while(n > 0) {
        const temp = n % 2 === 0 ? 0 : 1;
        if (num != undefined && num + temp !== 1) {
            return false;
        }
        num = temp;
        n = (n - num) / 2;
    }
    return true;
};
console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
// @lc code=end

