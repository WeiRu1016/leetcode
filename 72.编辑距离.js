/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp = Array.from(Array(word1.length + 1), () => { return []; });

    const bfs = (start1, start2) => {
        if (dp[start1][start2] != undefined) {
            return dp[start1][start2];
        }

        if (word2.length === start2) {
            dp[start1][start2] = word1.length - start1;
        } else if (word1.length === start1) {
            dp[start1][start2] = word2.length - start2;
        } else if (word1[start1] === word2[start2]) {
            dp[start1][start2] = bfs(start1 + 1, start2 + 1);
        } else {
            dp[start1][start2] = Math.min(
                bfs(start1 + 1, start2 + 1), // 替换
                bfs(start1 + 1, start2), // 删除
                bfs(start1, start2 + 1) // 插入
            ) + 1;
        }

        return dp[start1][start2];
    }

    bfs(0, 0, 0);
    return dp[0][0];
};
console.log(minDistance('horse', 'ros') === 3);
console.log(minDistance('intention', 'execution') === 5);
console.log(minDistance("dinitrophenylhydrazine", "acetylphenylhydrazine") === 6);
console.log(minDistance("algorithm", "altruistic") === 6);
console.log(minDistance('', ''));
console.log(minDistance('', 'a'));
console.log(minDistance('a', ''));
// @lc code=end

