/*
 * @lc app=leetcode.cn id=979 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const result = [];
    let min = 0;
    let max = s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            result.push(min);
            min += 1;
        } else if (s[i] === 'D') {
            result.push(max);
            max -= 1;
        }
    }
    result.push(min);
    return result;
};
// @lc code=end

