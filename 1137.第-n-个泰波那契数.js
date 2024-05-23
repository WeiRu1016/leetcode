/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    let t0 = 0, t1 = 1, t2 = 1;
    for (let i = 3; i <= n; i++) {
        const temp = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = temp;
    }
    return t2;
};
console.log(tribonacci(4) === 4);
console.log(tribonacci(25) === 1389537);

// @lc code=end

