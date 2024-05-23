/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            if (stack.length && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    if (!stack.length) {
        return s;
    }
};
// @lc code=end

