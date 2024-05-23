/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
   const stack = [];
   let current = null;
   for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (!current) {
        current = [price];
        continue;
    }
    if (current.length === 1) {
        if (price <= current[0]) {
            current[0] = price;
        } else {
            current[1] = price;
            // 考虑合并
            while(stack.length > 0) {
                const top = stack[stack.length - 1];
                const temp = top[1] - top[0] - fee;
                // 1笔生意
                const temp1 = current[1] - top[0] - fee;
                // 2笔生意
                const temp2 = top[1] - top[0] - fee + current[1] - current[0] - fee;
                if (current[1] - current[0] - fee > 0) {
                    if (temp1 <= temp2) {
                        break;
                    } else {
                        // 1笔生意比较合算
                        stack.pop();
                        current[0] = top[0];
                    }
                } else {
                    if (temp1 <= temp) {
                        break;
                    } else {
                        stack.pop();
                        current[0] = top[0];
                    }
                }
            }
            if (current[1] - current[0] - fee <= 0) {
                current = [current[0]];
            }
        }
        continue;
    }
    if (price < current[1]) {
        stack.push([...current]);
        current = [price];
    } else {
        current[1] = price;
    }
   }
   if (current.length === 2) {
    stack.push([...current]);
   }
   return stack.reduce((prev, item) => prev + item[1] - item[0] - fee, 0);
};
// 动态规划！！！
var maxProfit1 = function(prices, fee) {
    let [seller, buyer] = [0, -prices[0]];
    for (let i = 1; i < prices.length; i++) {
        [seller, buyer] = [Math.max(seller, buyer + prices[i] - fee), Math.max(buyer, seller - prices[i])];
    }
    return seller;
}
// console.log(maxProfit([1, 3, 2, 8, 4, 9], 2) === 8);
// console.log(maxProfit([1,3,7,5,10,3], 3) === 6);
// console.log(maxProfit([1,5,9], 2) === 6);
// @lc code=end

