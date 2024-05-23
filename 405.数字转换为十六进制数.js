/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

var toHex = function (num) {
  if (!num) {
    return `${num}`;
  }
  const plus = num < 0;
  let c = plus ? 1 : 0;
  num = Math.abs(num);
  const res = [];

  for (let i = 0; i < 8; i++) {
    let mod = num % 16;
    if (plus) {
      mod = 15 - mod + c;
      c = Math.floor(mod / 16);
      mod = mod % 16;
    }
    res.unshift(arr[mod]);
    num = Math.floor(num / 16);
  }
  let str = "";
  for (let i = 0; i < res.length; i++) {
    if (str || res[i]) {
      str += res[i];
    }
  }
  return str;
};
console.log(toHex(26));
console.log(toHex(-1));
// @lc code=end
