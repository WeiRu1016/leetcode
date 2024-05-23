/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= max3) {
            continue;
        }
        if (nums[i] === max1 || nums[i] === max2) {
            continue;
        }

        max3 = nums[i];

        if (max3 > max2) {
            const temp = max3;
            max3 = max2;
            max2 = temp;
        }
        if (max2 > max1) {
            const temp = max2;
            max2 = max1;
            max1 = temp;
        }
    }
    return isFinite(max3) ? max3 : max1;
};
console.log(thirdMax([2,2]));
// @lc code=end

