/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let first = [];
    let second = [];
    let max = 0;
    let minIndex = 0;
    for (let i = 1; i <= prices.length; i++) {
        if (i !== prices.length && prices[i] >= prices[i - 1]) {
            continue;
        }
        if (prices[i - 1] - prices[minIndex] > 0) {
            if (first.length === 0) {
                first = [minIndex, i - 1];
            } else if (second.length === 0) {
                second = [minIndex, i - 1];
            } else {
                const temp1 = prices[first[1]] - prices[first[0]];
                const temp2 = prices[second[1]] - prices[second[0]];
                const temp3 = prices[second[1]] - prices[first[0]];
                max = Math.max(max, temp1 + temp2);
                if (temp1 > temp2 && temp1 > temp3) {
                    first = first;
                } else if (temp2 > temp1 && temp2 > temp3) {
                    first = second;
                } else {
                    first = [first[0], second[1]];
                }
                second = [minIndex, i - 1];
            }
        }
        minIndex = i;
    }

    const temp1 = prices[first[1]] - prices[first[0]];
    const temp2 = prices[second[1]] - prices[second[0]];

    return Math.max(max, temp1 + temp2);
    
};
// console.log(maxProfit([1,3,5,4,3,7,6,9,2,4]) === 10);
// console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]) === 13);
// console.log(maxProfit([3,3,5,0,0,3,1,4]) === 6);
console.log(maxProfit([1,2,3,4,5]) === 4);
console.log(maxProfit([7,6,4,3,1]) === 0);
console.log(maxProfit([1]) === 0);
// @lc code=end

