/*
 * @lc app=leetcode.cn id=1155 lang=javascript
 *
 * [1155] 掷骰子的N种方法
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const mod = Math.pow(10, 9) + 7;
    if (target < n || target > k * n) {
        return 0;
    }
    if (target === n || target === k * n) {
        return 1;
    }
    let sum = 0;
    for (let j = 1; j <= k; j++) {
        const count = numRollsToTarget(n - 1, k, target - j);
        sum = (sum + count) % mod;
    }
    return sum;
};
// console.log(numRollsToTarget(1, 6, 3) === 1);
// console.log(numRollsToTarget(2, 6, 7) === 6);
console.log(numRollsToTarget(30, 30, 500) === 222616187);
// @lc code=end

