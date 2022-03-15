/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        // 降低了就需要卖
        if (prices[i] < prices[i - 1]) {
            result += prices[i - 1] - min;
            min = prices[i];
        }
    }
    if (prices[prices.length - 1] > min) {
        result += prices[prices.length - 1] - min;
    }
    return result;
};
// console.log(maxProfit([7,1,5,3,6,4]) === 7);
// console.log(maxProfit([1,2,3,4,5]) === 4);
// console.log(maxProfit([7,6,4,3,1]) === 0);
// @lc code=end

