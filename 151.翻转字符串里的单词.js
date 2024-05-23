/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = [];
    let word = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            word = s[i] + word;
        } else if (word) {
            result.push(word);
            word = '';
        }
    }
    word && result.push(word);
    return result.join(' ');
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
// @lc code=end

