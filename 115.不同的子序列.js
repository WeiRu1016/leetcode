/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
    const dp = [];
    const bfs = (index, pos) => {
        if (pos === t.length) {
            return 1;
        }
        if (s.length - index < t.length - pos) {
            return 0;
        }
        if (!dp[index]) {
            dp[index] = [];
        }
        if (dp[index][pos] === undefined) {
            if (s[index] === t[pos]) {
                dp[index][pos] = bfs(index + 1, pos + 1) + bfs(index + 1, pos);
            } else {
                dp[index][pos] = bfs(index + 1, pos);
            }
        }
        return dp[index][pos];
    }
    bfs(0, 0);
    return dp[0]?.[0] ?? 0;
};
console.log(numDistinct("fff", "ffff"));
console.log(numDistinct('rabbbit', 'rabbit'));
console.log(numDistinct('babgbag', 'bag'));
// @lc code=end

