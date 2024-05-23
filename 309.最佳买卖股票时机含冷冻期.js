/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
var maxProfit = function(prices) {
    let [sell, buy, lock] = [0, -prices[0], 0];
    for (let i = 1; i < prices.length; i++) {
        [sell, buy, lock] = [Math.max(sell, lock), Math.max(buy, sell - prices[i]), Math.max(lock, buy + prices[i])];
    }
    return Math.max(sell, lock);
};
console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([1]));
// @lc code=end

