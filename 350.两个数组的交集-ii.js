/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map1 = nums1.reduce((prev, num) => {
        prev[num] = (prev[num] || 0) + 1;
        return prev;
    }, {});

    return nums2.reduce((prev, num) => {
        if (map1[num]) {
            map1[num] -= 1;
            prev.push(num);
        }
        return prev;
    }, []);
};
// @lc code=end

