/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            res += String.fromCharCode(charCode + 32);
        } else {
            res += s[i];
        }
    }
    return res;
};
// @lc code=end

