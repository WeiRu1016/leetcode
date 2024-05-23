/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const set = new Set();
    for (let i = 1; i <= n; i++) {
        set.add(i);
    }
    nums.forEach((num) => {
        if (set.has(num)) {
            set.delete(num);
        }
    });
    return [...set];
};
// @lc code=end

