/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let res = '';
    let i = s.length - 1;
    for (; i >= 0; i--) {
        let start = 0;
        let end = i;
        while(start < end && s[start] === s[end]) {
            start += 1;
            end -= 1;
        }
        if (start >= end) {
            break;
        }
        res = res + s[i];
    }
    return res + s;
};
console.log(shortestPalindrome("aacecaaa") === "aaacecaaa");
console.log(shortestPalindrome("abcd") === "dcbabcd");
// @lc code=end

