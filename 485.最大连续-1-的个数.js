/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    max = Math.max(count, max);
    return max;
};
console.log(findMaxConsecutiveOnes([0]));
// @lc code=end

