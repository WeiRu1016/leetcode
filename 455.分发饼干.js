/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const g1 = [...g].sort((p, n) => p - n);
    const s1 = [...s].sort((p, n) => p - n);
    let i = 0;
    let j = 0;
    let count = 0;
    while(i < g1.length && j < s1.length) {
        if (s1[j] >= g1[i]) {
            i++;
            j++;
            count++;
        } else {
            j++;
        }
    }
    return count;
};
// @lc code=end

