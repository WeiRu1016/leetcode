/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = [];
    let index = 0;
    const n = nums.length;
    while(index < n) {
        if (nums[index] === -1 || nums[index] === index + 1) {
            index += 1;
        } else if (nums[nums[index] - 1] === nums[index]) {
            result.push(nums[index]);
            nums[index] = -1;
            index += 1;
        } else {
            const temp = nums[nums[index] - 1];
            nums[nums[index] - 1] = nums[index];
            nums[index] = temp;
        }
    }
    return result;
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([1]));
// @lc code=end

