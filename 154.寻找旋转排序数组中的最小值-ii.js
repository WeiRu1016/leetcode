/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 前半部分升序列
// 后半部分也升序
// 找到拐点就行
// 要是没有拐点就是 一条升序，最小值就是 nums[0]
var findMin = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            return nums[i + 1];
        }
    }
    return nums[0];
};
console.log(findMin([3,5,1]));
console.log(findMin([1,3,5]));
console.log(findMin([2,2,2,0,1]));
// @lc code=end

