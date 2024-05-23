/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a === b) {
    return -1;
  }
  if (a.length < b.length) {
    return b.length;
  }
  return a.length;
};
console.log(
  findLUSlength(
    "horbxeemlgqpqbujbdagizcfairalg",
    "iwvtgyojrfhyzgyzeikqagpfjoaeen"
  )
);

console.log(findLUSlength("aba", "cdc"));
console.log(findLUSlength("aaa", "bbb"));
console.log(findLUSlength("aaa", "aaa"));
// @lc code=end
