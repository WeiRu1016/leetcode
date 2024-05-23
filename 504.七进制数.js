/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let str = '';
    let char = '';
    if (num < 0) {
        num = -1 * num;
        char = '-';
    }
    while(num) {
        const mod = num % 7;
        str = `${mod}${str}`;
        num = Math.floor(num / 7);
    }
    return `${char}${str}`;
};
console.log(convertToBase7(100));
console.log(convertToBase7(-7));
// @lc code=end

