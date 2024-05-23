/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const result = {};
    const count = Math.floor(nums.length / 3);
    for (let i = 0; i < nums.length; i++) {
        result[nums[i]] = (result[nums[i]] || 0) + 1;
    }
    return Object.entries(result).reduce((prev, [key, value]) => {
        if (value > count) {
            prev.push(Number(key));
        }
        return prev;
    }, []);
};
console.log(majorityElement([3, 2, 3]));
// @lc code=end

