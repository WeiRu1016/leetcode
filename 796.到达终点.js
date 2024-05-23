/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString1 = function(s, goal) {
    if (s.length !== goal.length) {
        return false
    }
    for (let i = 0, l = s.length; i < l; i++) {
        if (s === goal) {
            return true;
        }
        const chat = s[0];
        s = s.slice(1) + chat;
    }
    return false
};
// 参考答案
// 因为 s + s 包含 s旋转的所有情况
var rotateString = function(s, goal) {
    return s.length === goal.length && (s + s).indexOf(goal) > -1
}
console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));
// @lc code=end

