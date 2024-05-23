/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// 通过 x & x-1 可以干掉 1个 1位
const getCount = (n) => {
    let count = 0;
    while(n > 0) {
        n = n & (n - 1);
        count += 1;
    }
    return count
};
var countBits = function(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(getCount(i));
    }
    return result;
};
// @lc code=end

