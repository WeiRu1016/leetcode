/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const m = board.length;
    const n = board[0].length;
    const result = new Set();

    const dic = { children: {} };

    words.forEach((word) => {
        let node = dic;
        for (let i = 0; i < word.length; i++) {
            node.children[word[i]] = node.children[word[i]] || { children: {} };
            node = node.children[word[i]];
            if (i === word.length - 1) {
                node.word = word;
            }
        }
    });

    const visited = Array.from(Array(m), () => Array(n).fill(false));

    const bfs = (i, j, node) => {
        if (!node.children[board[i][j]]) {
            return;
        }

        node = node.children[board[i][j]];

        if (node.word) {
            result.add(node.word);
        }

        visited[i][j] = true;
        // 上
        if (i - 1 >= 0 && !visited[i - 1][j]) {
            bfs(i - 1, j, node);
        }
        // 右
        if (j + 1 < n && !visited[i][j + 1]) {
            bfs(i, j + 1, node);
        }
        // 下
        if (i + 1 < m && !visited[i + 1][j]) {
            bfs(i + 1, j, node);
        }
        // 左
        if (j - 1 >= 0 && !visited[i][j - 1]) {
            bfs(i, j - 1, node);
        }
        visited[i][j] = false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            bfs(i, j, dic);
        }
    }
    return [...result];
};
console.log(findWords(
    [["a","b"],["c","d"]],
    ["abcb"]
));
console.log(findWords(
    [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
    ["oath","pea","eat","rain"]
))
console.log(findWords([["a"]], ["a"]));
console.log(findWords([
    ["a", "b", "c", "e"],
    ["x", "x", "c", "d"],
    ["x", "x", "b", "a"]
], ["abc", "abcd"]));
console.log(findWords(
    [
        ["o","a","b","n"],
        ["o","t","a","e"],
        ["a","h","k","r"],
        ["a","f","l","v"]
    ],
    ["oa","oaa"]
));
// @lc code=end