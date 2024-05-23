/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let str = '';
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        str = '-';
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    const num = Math.floor(numerator / denominator);
    numerator = numerator - num * denominator;
    str += num;

    if (numerator === 0) {
        return str;
    }

    str += '.';
    numerator = numerator * 10;
    const map = {};
    let index = str.length;
    while(numerator > 0 && map[numerator] == undefined) {
        let temp = '';
        map[numerator] = index;
        while(numerator < denominator) {
            numerator = numerator * 10;
            temp += '0';
        }
        const n = Math.floor(numerator / denominator);
        temp += n;

        numerator = (numerator - n * denominator) * 10;
        index += temp.length;
        str += temp;
    }
    if (numerator > 0) {
        const i = map[numerator];
        str = str.slice(0, i) + '(' + str.slice(i) + ')';
    }
    return str;
};
console.log(fractionToDecimal(1, 2));
console.log(fractionToDecimal(2, 1));
console.log(fractionToDecimal(4, 333));
// @lc code=end

