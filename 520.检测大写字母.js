/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word.slice(1) === word.slice(1).toLocaleLowerCase();
};
// @lc code=end

