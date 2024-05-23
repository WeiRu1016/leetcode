/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = [0, 1];

    const bfs = (n) => {
        if (dp[n]) {
            return dp[n];
        }

        let minCount = 0;
        let temp = n;
        while(temp > 0) {
            const res = Math.floor(Math.sqrt(temp));
            temp -= res * res;
            minCount += 1;
        }

        if (minCount === 1) {
            dp[n] = minCount;
        } else {
            const max = Math.floor(Math.sqrt(n));
            const min = Math.ceil(Math.sqrt(n / minCount));

            for (let i = max - 1; i >= min; i--) {
                const tempCount = bfs(n - i * i) + 1;
                minCount = Math.min(tempCount, minCount);
            }
            dp[n] = minCount;
        }
        return dp[n];
    }

    bfs(n);
    return dp[n];
};
console.log(numSquares(12) === 3);
console.log(numSquares(13) === 2);
console.log(numSquares(19) === 3); // 3
console.log(numSquares(32) === 2);
console.log(numSquares(7168) === 4)
// @lc code=end

