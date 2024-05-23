/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement1 = function(num) {
    let result = 0;
    let lg = 0;
    while(num) {
        result += Math.pow(2, lg) * (num % 2 ? 0 : 1);
        lg += 1;
        num >>= 1;
    }
    return result;
};
// x 和 11111 异或就取反了
var findComplement = function(num) {
    let mask = 0;
    const temp = num;
    while(num) {
        mask <<= 1;
        mask |= 1;
        num >>= 1;
    }
    return temp ^ mask;
};
console.log(findComplement(5));
// @lc code=end

