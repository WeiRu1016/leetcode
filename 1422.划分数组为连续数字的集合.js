/*
 * @lc app=leetcode.cn id=1537 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore1 = function(s) {
    let max = -Infinity;
    let left = 0;
    for (let i = 0; i < s.length - 1; i++) {
        left += s[i] === '0' ? 1 : 0;
        let right = 0;
        for (let j = i + 1; j < s.length; j++) {
            right += s[j] === '1' ? 1 : 0;
        }
        max = Math.max(left + right, max);
    }
    return max;
};
// 2次遍历解法
var maxScore = function(s) {
    let score = 0;
    if (s[0] === '0') {
        score += 1;
    }
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '1') {
            score += 1;
        }
    }
    let max = score;
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === '1') {
            score -= 1;
        } else {
            score += 1;
        }
        max = Math.max(score, max);
    }
    return max;
}

console.log(maxScore('011101'));
console.log(maxScore('00111'));
console.log(maxScore('1111'));
// @lc code=end

