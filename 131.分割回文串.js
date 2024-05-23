/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const dp = Array.from(Array(s.length), () => {
        return Array(s.length).fill(true);
    });

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            dp[i][j] = dp[i + 1][j - 1] && (s[i] === s[j]);
        }
    }
    const result = [];
    const bfs = (index, path) => {
        if (index === s.length) {
            result.push([...path]);
            return;
        }
        let temp = '';
        for (let i = index; i < s.length; i++) {
            temp += s[i];
            if (dp[index][i]) {
                path.push(temp);
                bfs(i + 1, path);
                path.pop();
            }
        }
    }
    bfs(0, [])
    return result;
};
// console.log(partition('aab'));
// console.log(partition('a'));
// @lc code=end

