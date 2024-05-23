/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let count = 0;
  let current = s[0];
  const counts = [0, 0];
  counts[current] += 1;

  for (let i = 1; i <= s.length; i++) {
    if (i < s.length && s[i] === current) {
      counts[current] += 1;
    } else {
      count += Math.min(counts[0], counts[1]);
      current = s[i];
      counts[current] = 1;
    }
  }
  return count;
};
console.log(countBinarySubstrings("00110011"));
// console.log(countBinarySubstrings("10101"));
// @lc code=end
