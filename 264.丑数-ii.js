/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n === 1) {
        return 1;
    }

    let count2 = 0;
    let count3 = 0;
    let count5 = 0;

    for (let i = 0; i < n; i++) {

    }
};
console.log(nthUglyNumber(10));
console.log(nthUglyNumber(1));
// @lc code=end

