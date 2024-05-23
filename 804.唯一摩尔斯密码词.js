/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const arr = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const result = new Set();
  words.forEach((word) => {
    const str = word.split("").reduce((acc, char) => {
      const index = char.charCodeAt() - "a".charCodeAt();
      return `${acc}${arr[index]}`;
    }, "");
    result.add(str);
  });
  return result.size;
};
console.log(uniqueMorseRepresentations(["gin", "zen"]));
// @lc code=end
