/*
 * @lc app=leetcode.cn id=1524 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        words.some((item, j) => {
            if (j !== i && item.indexOf(words[i]) >= 0) {
                result.push(words[i]);
                return true;
            }
            return false;
        })
    }
    return result;
};
console.log(stringMatching(["mass","as","hero","superhero"]));
console.log(stringMatching(["leetcode","et","code"]));
console.log(stringMatching(["blue","green","bu"]));
// @lc code=end

