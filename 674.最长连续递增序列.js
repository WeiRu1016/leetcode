/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let i = 0;
  let max = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      start = i;
    }
    max = Math.max(max, i - start + 1);
  }

  return max;
};
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]) === 3);
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]) === 1);
// @lc code=end
