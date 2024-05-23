/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 解题思路：
 * 证明 nums 里面相等的数 小于 (n + 1) / 2个
 * 
 * 因为摆动实际就是 波谷波峰 波谷波峰的交替。
 * 所以波峰 = (n + 1) / 2，因此 nums 里面相等的数 小于 (n + 1) / 2 个
 * 
 * 把 nums 从小到大排序，把 nums[0] 做波谷，nums[(n + 1) / 2]做波峰，nums[1], nums[(n + 3) / 2].
 * 把 x = (n + 1) / 2
 * 就是 nums[0], nums[x], nums[1], nums[x + 1], ....nums[x - 1], nums[2x + 1];
 * 
 * n分奇数、偶数两种情况
 * 
 * n 为奇数，则 序列就是 nums[0], nums[(n + 1) / 2], nums[1], nums[(n + 1) / 2 + 1], ....nums[(n + 1) / 2 - 1], nums[n];
 * n 为偶数，则 序列就是 nums[0], nums[n / 2 + 1], nums[1], nums[n / 2 + 2], ...nums[n / 2 - 1], nums[n], nums[n / 2];
 */
var wiggleSort = function(nums) {
    // 从小到大排序
    const sorted = [...nums].sort((p, n) => p - n);
    const n = nums.length - 1;
    const x = n % 2 ? (n + 1) / 2 : (n + 2) / 2;
    for (let i = 0, j = 0; i < x; i++) {
        nums[j++] = sorted[i];
        nums[j++] = sorted[x + i];
    }
    if (n % 2 === 0) {
        nums[n] = sorted[n / 2];
    }
    return nums;
};
console.log(wiggleSort([1,5,1,1,6,4]));
console.log(wiggleSort([1,3,2,2,3,1]));
console.log(wiggleSort([4,5,5,6]));
// @lc code=end

