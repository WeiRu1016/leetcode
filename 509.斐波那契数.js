/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    let f1 = 0;
    let f2 = 1;
    for (let i = 1; i < n; i++) {
        const temp = f1;
        f1 = f2;
        f2 = temp + f2;
    }
    return f2;
};
console.log(fib(3));
// @lc code=end

