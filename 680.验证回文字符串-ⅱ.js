/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const valid = (start, end) => {
        while(start < end) {
            if (s[start] !== s[end]) {
                break;
            }
            start += 1;
            end -= 1;
        }
        return { start, end, success: start >= end };
    }

    const result = valid(0, s.length - 1);
    if (result.success) {
        return true;
    }

    return valid(result.start + 1, result.end).success || valid(result.start, result.end - 1).success;
};
console.log(validPalindrome("aba") === true);
console.log(validPalindrome("abca") === true);
console.log(validPalindrome("abc") === false);
console.log(validPalindrome("bddb") === true);

// @lc code=end

