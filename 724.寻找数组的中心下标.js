/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const n = nums.length;
  const left = Array(n).fill(0);
  const right = Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] + nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] + nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (left[i] === right[i]) {
      return i;
    }
  }
  return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]) === 3);
console.log(pivotIndex([1, 2, 3]) === -1);
console.log(pivotIndex([2, 1, -1]) === 0);
// @lc code=end
