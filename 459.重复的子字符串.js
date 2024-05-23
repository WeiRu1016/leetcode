/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const size = s.length;
    let index = 1;
    while(index * 2 <= size) {
        if (size % index === 0) {
            const char = s.slice(0, index);
            const temp = char.repeat(size / index);
            if (s === temp) {
                return true;
            }
        }
        index += 1;
    }
    return false;
};
console.log(repeatedSubstringPattern('abab'));
console.log(repeatedSubstringPattern('aba'));
console.log(repeatedSubstringPattern('abcabcabcabc'));
console.log(repeatedSubstringPattern('bb'));
// @lc code=end

