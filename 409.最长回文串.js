/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const chars = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        chars[char] = (chars[char] ?? 0) + 1;
    }
    let odd = true;
    let sum = 0;
    for (let char in chars) {
        const count = chars[char];
        if (count % 2) {
            if (odd) {
                odd = false;
                sum += count;
            } else {
                sum += count - 1;
            }
        } else {
            sum += count;
        }
    }
    return sum;
};
console.log(longestPalindrome("abccccdd"));
// @lc code=end

