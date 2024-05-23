/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

/**
 * @param {number[]} nums
 * @return {number}
 * n^2
 */
var findDuplicate1 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return nums[i];
            }
        }
    }
};
var findDuplicate = function(nums) {
};
console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
// @lc code=end

