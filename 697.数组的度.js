/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = {};
  let max = 0;
  let minRange = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map[num]) {
      map[num] = { count: 0, start: i };
    }
    map[num].count += 1;
    const range = i - map[num].start + 1;
    if (map[num].count > max) {
      max = map[num].count;
      minRange = range;
    } else if (map[num].count === max && range < minRange) {
      minRange = range;
    }
  }
  return minRange;
};
console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
// @lc code=end
