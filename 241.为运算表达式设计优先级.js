/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */

// const calc = (arr, start, end) => {
//     const stack = [arr[start]];
//     let i = start + 1;
//     while(stack.length > 0 && i <= end) {
//         if (stack[stack.length - 1] === '*') {
//             const op = stack.pop();
//             const left = stack.pop();
//             stack.push(left * arr[i]);
//         } else {
//             stack.push(arr[i]);
//         }
//         i++;
//     }
//     while (stack.length > 1) {
//         const right = stack.pop();
//         const op = stack.pop();
//         const left = stack.pop();
//         stack.push(op === '+' ? left + right : left - right);
//     }
//     return stack.pop();
// }
const convert2num = (expression) => {
    const nums = [];
    let i = 0;
    let j = i;
    for (; i < expression.length; i++) {
        if (['+', '-', '*'].includes(expression[i])) {
            nums.push(Number(expression.slice(j, i)));
            nums.push(expression[i]);
            j = i + 1;
        }
    }
    nums.push(Number(expression.slice(j, i)));
    return nums;
}
const calc = (left, right, op) => {
    if (op === '*') {
        return left * right;
    }
    if (op === '+') {
        return left + right;
    }
    return left - right;
}
var diffWaysToCompute = function(expression) {
    const nums = convert2num(expression);
    if (nums.length === 1) {
        return [nums[0]];
    }
    const dp = Array.from(Array(nums.length), () => Array.from(Array(nums.length), () => []));
    for (let i = 0; i < nums.length; i++) {
        dp[i][i] = [nums[i]];
    }
    // dp[i][j] = (dp[i][i] op dp[i + 1][j]) & ((dp[i][j] op dp[i + 1][j - 1]) op dp[j][j])
    const dfs = (start, end) => {
        let temp;
        if (end - start < 0) {
            temp = [];
        } else if (end - start === 0) {
            temp = dp[start][start];
        } else if (end - start + 1 === 3) {
            const left = dp[start][start][0];
            const op = dp[start + 1][start + 1][0];
            const right = dp[end][end][0];
            temp = [calc(left, right, op)];
        } else {
            const left = dp[start][start][0];
            const op1 = dp[start +1][start + 1][0];
            const middle = dfs(start + 2, end - 2);
            const op2 = dp[end - 1][end - 1][0];
            const right = dp[end][end][0];

            const result = [];
            middle.forEach((num) => {
                result.push(calc(calc(left, num, op1), right, op2));
            });

            const middle2 = dfs(start + 2, end);
            middle2.forEach((num) => {
                result.push(calc(left, num, op1));
            });
            temp = result;
        }
        return temp;
    }

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        const left = dfs(0, i);
        const op = nums[i + 1][0];
        const right = dfs(i + 2, nums.length - 1);
        for (let j = 0; j < left.length; j++) {
            for (let k = 0; k < right.length; k++) {
                result.push(calc(left[j], right[k], op));
            }
        }
    }
    return result;
}
console.log(diffWaysToCompute("1+2+3"))
// console.log(diffWaysToCompute("2 - 1"));
// console.log(diffWaysToCompute("2-1-1"));
// console.log(diffWaysToCompute("2*3-4*5"));
// @lc code=end

