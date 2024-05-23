/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let rows = 0;
  let nums = 0;
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - "a".charCodeAt();
    nums += widths[index];
    if (nums > 100) {
      rows += 1;
      nums = widths[index];
    }
  }
  if (nums) {
    rows++;
  }
  return [rows, nums];
};
console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "abcdefghijklmnopqrstuvwxyz"
  )
);
// @lc code=end
