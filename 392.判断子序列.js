/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(t, s) {
    let si = 0;
    let ti = 0;
    while(si < s.length && ti < t.length) {
        if (s[si] === t[ti]) {
            ti++;
        }
        si++;
    }
    return ti >= t.length;
};
console.log(isSubsequence('abc', 'ahbgdc'));
// @lc code=end

