/*
 * @lc app=leetcode.cn id=640 lang=javascript
 *
 * [640] 求解方程
 */

// @lc code=start
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    const arr = [[0, 0], [0, 0]];
    let dir = 0;
    let flag = 1;
    for (let i = 0; i < equation.length; i++) {
        if (equation[i] === 'x') {
            arr[dir][0] += flag;
        } else if (equation[i] === '+') {
            flag = 1;
        } else if (equation[i] === '-') {
            flag = -1;
        } else if (equation[i] === '=') {
            dir = 1;
            flag = 1;
        } else {
            let num = Number(equation[i]);
            while(i + 1 < equation.length && Number.isFinite(+equation[i + 1])) {
                i++;
                num = num * 10 + Number(equation[i]);
            }
            if (equation[i + 1] === 'x') {
                flag = flag * num;
            } else {
                arr[dir][1] += flag * num;
            }
        }
    }

    const [left, right] = arr;
    const x = left[0] - right[0];
    const val = right[1] - left[1];
    if (x === 0) {
        return val === 0 ? "Infinite solutions" : "No solution";
    }
    return `x=${val / x}`;
};
console.log(solveEquation('x+5-3+x=6+x-2'));
console.log(solveEquation('x=x'));
console.log(solveEquation('2x=x'));
console.log(solveEquation("3x=33+22+11"));
// @lc code=end

