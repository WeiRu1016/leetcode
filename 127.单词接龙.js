/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var onChangedWord = (word, tempWord) => {
    let count = 0;
    for (let k = 0; k < word.length; k++) {
        if (word[k] !== tempWord[k]) {
            count += 1;
        }
        if (count >= 2) {
            return false;
        }
    }
    return count === 1;
}
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return [];
    }
    // 构建图
    const map = {}; // key: word, value => 可以转化的word
    [beginWord, ...wordList].forEach((word, i) => {
        map[word] = map[word] || [];
        for (let j = i + 1; j <= wordList.length; j++) {
            const tempWord = wordList[j - 1];
            if (!map[word].includes(tempWord) && onChangedWord(word, tempWord)) {
                map[word].push(tempWord);
                map[tempWord] = map[tempWord] || [];
                map[tempWord].push(word);
            }
        }
    });

    // 寻找最短路径
    const dp = {};
    dp[beginWord] = 1;
    const stack = [beginWord];
    const hasRead = {};

    while (stack.length > 0) {
        for (let i = 0, size = stack.length; i < size; i++) {
            const word = stack.shift();
            hasRead[word] = true;
            if (!map[word] || !map[word].length) {
                continue;
            }
            for (let j = 0; j < map[word].length; j++) {
                const temp = map[word][j];
                if (dp[temp] && dp[temp] > dp[word] + 1) {
                    dp[temp] = dp[word] + 1;
                    !hasRead[temp] && stack.push(temp);
                } else if (!dp[temp]) {
                    dp[temp] = dp[word] + 1;
                    !hasRead[temp] && stack.push(temp);
                }
            }
        }
    }
    return dp[endWord] || 0;
};
console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));
// @lc code=end