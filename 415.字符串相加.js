/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let c = 0;
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    while(i >= 0 || j >= 0) {
        const temp1 = i >= 0 ? Number(num1[i]) : 0;
        const temp2 = j >= 0 ? Number(num2[j]) : 0;
        const count = temp1 + temp2 + c;

        if (count > 9) {
            result = `${count - 10}` + result;
            c = 1;
        } else {
            result = `${count}` + result;
            c = 0;
        }
        i--;
        j--;
    }
    if (c > 0) {
        result = '1' + result;
    }
    return result;
};
// @lc code=end

