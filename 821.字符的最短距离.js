/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      stack.push(i);
    }
  }
  const result = [];
  let prev = -1;
  let next = stack.shift();
  for (let i = 0; i < s.length; i++) {
    let range;
    if (prev === -1) {
      range = next - i;
    } else if (next === -1) {
      range = i - prev;
    } else {
      range = Math.min(next - i, i - prev);
    }
    result.push(range);
    if (i === next) {
      prev = next;
      next = stack.length ? stack.shift() : -1;
    }
  }
  return result;
};
console.log(shortestToChar("loveleetcode", "e"));
// @lc code=end
