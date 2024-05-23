/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const word2map = (word) => {
    const wordMap = Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      const code = word[i].toLocaleLowerCase().charCodeAt() - "a".charCodeAt();
      if (code >= 0 && code <= 26) {
        wordMap[code] += 1;
      }
    }
    return wordMap;
  };

  const target = word2map(licensePlate);

  let result = -1;
  for (let i = 0; i < words.length; i++) {
    const word = word2map(words[i]);
    const matched = target.every((value, index) => {
      return word[index] >= value;
    });
    if (matched && (result === -1 || words[i].length < words[result].length)) {
      result = i;
    }
  }
  return words[result];
};
console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
);
// @lc code=end
