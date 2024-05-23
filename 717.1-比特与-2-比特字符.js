/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  const last = bits[bits.length - 1];
  if (last !== 0) {
    return false;
  }
  for (let i = 0; i < bits.length - 1; i++) {
    if (bits[i] === 1) {
      i++;
      if (i === bits.length - 1) {
        return false;
      }
    }
  }
  return true;
};
console.log(isOneBitCharacter([1, 1, 0]));
// @lc code=end
