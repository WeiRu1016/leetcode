/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result = 0;
    let prevNum = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            const num = prevNum[prevNum.length - 1] + prevNum[prevNum.length - 2];
            prevNum.push(num);
            result += num;
        } else if (ops[i] === 'D') {
            const num = prevNum[prevNum.length - 1] * 2;
            prevNum.push(num);
            result += num;
        } else if (ops[i] === 'C') {
            const num = prevNum.pop();
            result -= num;
        } else {
            const num = Number(ops[i]);
            prevNum.push(num);
            result += num;
        }
    }
    return result;
};
// console.log(calPoints(["5","2","C","D","+"]));
// console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
// @lc code=end

