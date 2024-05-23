/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = "";
  let i = 0;
  while (i < s.length) {
    let word = "";
    while (i < s.length && s[i] !== " ") {
      word = `${s[i]}${word}`;
      i++;
    }
    str += `${word}`;
    if (i < s.length) {
      str += `${s[i]}`;
      i++;
    }
  }
  return str;
};
console.log(
  reverseWords("Let's take LeetCode contest") === "s'teL ekat edoCteeL tsetnoc"
);
// @lc code=end
