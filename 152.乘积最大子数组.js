/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：dp[i] = dp[i - 1] 或者 带上 arr[i]的所有子数组
 * 优化一下：
 * 带上 arr[i]的最大值 只会是
 * 1. 带上 arr[i - 1]的数组的最大值 * arr[i]
 * 2. 带上 arr[i - 1]的数组的最小值 * arr[i]（负数情况）
 * 3. arr[i]自己
 */
var maxProduct = function(nums) {
    const dp = Array(nums.length);
    dp[0] = nums[0];
    let min = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const arr = [max * nums[i], min * nums[i], nums[i]];
        max = Math.max.apply(null, arr);
        min = Math.min.apply(null, arr);

        dp[i] = Math.max(dp[i - 1], max);
    }
    return dp[nums.length - 1];
};
// console.log(maxProduct([2,3,-2,4]));
// console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([-4,-3,-2]));
// @lc code=end

