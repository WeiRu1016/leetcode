/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const result = [];
    const map = new Set();
    wordDict.forEach((word) => {
        map.add(word);
    });
    const bfs = (index, str) => {
        if (index === s.length) {
            result.push(str.trim());
            return;
        }
        let temp = '';
        for (let i = index; i < s.length; i++) {
            temp += s[i];
            // 可加空格
            if (map.has(temp)) {
                bfs(i + 1, str + temp + ' ');
            }
        }
    }
    bfs(0, '');
    return result;
};
console.log(wordBreak('catsanddog', ["cat","cats","and","sand","dog"]));
// @lc code=end

