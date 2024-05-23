/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct1 = function(nums) {
    // 从下到大排序
    const sorted = nums.sort((p, n) => p - n);
    // 最大的三个和最小的2个 * 最大的1个比较
    const size = nums.length;
    return Math.max(sorted[0] * sorted[1] * sorted[size - 1], sorted[size - 1] * sorted[size - 2] * sorted[size - 3]);
};
var maximumProduct = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (value > max1) {
            max3 = max2;
            max2 = max1;
            max1 = value;
        } else if (value > max2) {
            max3 = max2;
            max2 = value;
        } else if (value > max3) {
            max3 = value;
        }

        if (value < min1) {
            min2 = min1;
            min1 = value
        } else if (value < min2) {
            min2 = value;
        }
    }

    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
console.log(maximumProduct([3,4,0,0,-1,-5]));
// @lc code=end

