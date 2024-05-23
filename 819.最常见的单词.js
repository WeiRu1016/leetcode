/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const words = paragraph.replace(/\W/g, " ").split(/\s+/);
  const map = {};
  let max = 0;
  let maxWord;
  words.forEach((item) => {
    const word = item.toLocaleLowerCase();
    if (banned.includes(word)) {
      return;
    }
    map[word] = (map[word] || 0) + 1;
    if (map[word] > max) {
      max = map[word];
      maxWord = word;
    }
  });
  return maxWord;
};
console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
// @lc code=end
