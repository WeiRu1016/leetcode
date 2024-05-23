/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // dp[n] = Math.min(dp[n - 1] + cost[n - 1], dp[n - 2] + cost[n - 2]);
    const dp = [];
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp.pop();
};
console.log(minCostClimbingStairs([10,15,20]) === 15);
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]) === 6);
// @lc code=end

