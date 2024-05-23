/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const dp = new Array(s.length).fill(Infinity);
    const g = Array.from(Array(s.length), () => Array(s.length).fill(true));

    for (let i = s.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            g[i][j] = s[i] === s[j] && g[i + 1][j - 1];
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (g[i][s.length - 1]) {
            dp[i] = 0;
        } else {
            for (let j = i; j < s.length - 1; j++) {
                if (g[i][j]) {
                    dp[i] = Math.min(dp[i], 1 + dp[j + 1]);
                }
            }
        }
    }
    return dp[0];
};
console.log(minCut("aab") === 1);
console.log(minCut("a") === 0);
console.log(minCut("ab") === 1);
console.log(minCut("apjesgpsxoeiokmqmfgvjslcjukbqxpsobyhjpbgdfruqdkeiszrlmtwgfxyfostpqczidfljwfbbrflkgdvtytbgqalguewnhvvmcgxboycffopmtmhtfizxkmeftcucxpobxmelmjtuzigsxnncxpaibgpuijwhankxbplpyejxmrrjgeoevqozwdtgospohznkoyzocjlracchjqnggbfeebmuvbicbvmpuleywrpzwsihivnrwtxcukwplgtobhgxukwrdlszfaiqxwjvrgxnsveedxseeyeykarqnjrtlaliyudpacctzizcftjlunlgnfwcqqxcqikocqffsjyurzwysfjmswvhbrmshjuzsgpwyubtfbnwajuvrfhlccvfwhxfqthkcwhatktymgxostjlztwdxritygbrbibdgkezvzajizxasjnrcjwzdfvdnwwqeyumkamhzoqhnqjfzwzbixclcxqrtniznemxeahfozp") === 452);
// @lc code=end

