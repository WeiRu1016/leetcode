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
var maxProfit1 = function(prices) {
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

var maxProfit2 = function(prices) {
    let max = 0;
    let min = prices[0];
    let result = 0;
    let latestMinIndex = 1;
    let tempMax = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= min) {
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min;
            if (i >= latestMinIndex) {
                // 从i开始往后找最大的
                let tempMinIndex = i + 1;
                tempMax = 0;
                for (let j = tempMinIndex + 1; j < prices.length; j++) {
                    if (prices[j] <= prices[tempMinIndex]) {
                        tempMinIndex = j;
                    } else if (prices[j] - prices[tempMinIndex] > tempMax) {
                        tempMax = prices[j] - prices[tempMinIndex];
                        latestMinIndex = tempMinIndex;
                    }
                }
            }
            result = Math.max(result, max + tempMax);
        }
    }
    return result;
}

var maxProfit = function(prices) {
    const dp = Array(prices.length + 1).fill(0);
    let max = prices[prices.length - 1];
    let min = prices[0];
    let result = 0;
    let right2Max = 0;
    let left2Max = 0;
    // 从后往前 去存储 i -> prices.length 最大的交易
    for (let i = prices.length - 2; i >= 0; i--) {
        if (prices[i] > max) {
            max = prices[i];
            dp[i] = dp[i + 1];
        } else if (max - prices[i] > right2Max) {
            right2Max = max - prices[i];
            dp[i] = right2Max;
        } else {
            dp[i] = dp[i + 1];
        }
    }
    // 从前往后，达成一笔交易后，找一下 i 往后的最大交易，加起来
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= min) {
            min = prices[i];
        } else if (prices[i] - min > left2Max) {
            left2Max = prices[i] - min;
            result = Math.max(result, left2Max + dp[i + 1]);
        }
    }
    return result;
}

console.log(maxProfit([1,3,5,4,3,7,6,9,2,4]) === 10);
console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]) === 13);
console.log(maxProfit([3,3,5,0,0,3,1,4]) === 6);
console.log(maxProfit([1,2,3,4,5]) === 4);
console.log(maxProfit([7,6,4,3,1]) === 0);
console.log(maxProfit([1]) === 0);
console.log(maxProfit([3,2,6,5,0,3]) === 7);
console.log(maxProfit([2,1,2,1,0,0,1]) === 2);
// @lc code=end

