/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    let f1 = 1;
    let f2 = 2;

    for (let i = 3; i <= n; i++) {
        const temp = f2;
        f2 = f1 + f2;
        f1 = temp;
    }
    return f2;
};

// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(44));
// console.log(climbStairs1(43));
// @lc code=end

