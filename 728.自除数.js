/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function isSelfDividingNumber(num) {
    let temp = num;
    let mod = temp % 10;
    while(temp > 0 && num % mod === 0) {
        temp = Math.floor(temp / 10);
        mod = temp % 10;
    }
    return temp === 0;
}
var selfDividingNumbers = function(left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            result.push(i);
        }
    }
    return result;
};
console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(47, 85));
// @lc code=end

