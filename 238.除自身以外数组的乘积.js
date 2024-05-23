/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = [1];
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    const right = [];
    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    const answer = [];
    for (let i = 0; i < nums.length; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer;
};
console.log(productExceptSelf([1,2,3,4]));
// @lc code=end

