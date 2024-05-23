/*
 * @lc app=leetcode.cn id=951 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    const rightMin = [];
    rightMin[nums.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 1; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
    }

    let start = 0;
    let leftMax = nums[start];
    while(leftMax > rightMin[start + 1]) {
        start += 1;
        leftMax = Math.max(leftMax, nums[start]);
    }
    return start + 1;
};
// 一遍循环的方法
var partitionDisjoint = function(nums) {
    let start = 0;
    let leftMax = nums[0];
    let curMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curMax = Math.max(curMax, nums[i]);
        // 第i个小于当前的leftMax，则nusm[i]只能放在左边了，扩大左边范围
        if (nums[i] < leftMax) {
            leftMax = curMax;
            start = i;
        }
    }

    return start + 1;
};
console.log(partitionDisjoint([3,1,8,4,9,7,12,0,0,12,6,12,6,19,24,90,87,54,92,60,31,59,75,90,20,38,52,51,74,70,86,20,27,91,55,47,54,86,15,16,74,32,68,27,19,54,13,22,34,74,76,50,74,97,87,42,58,95,17,93,39,33,22,87,96,90,71,22,48,46,37,18,17,65,54,82,54,29,27,68,53,89,23,12,90,98,42,87,91,23,72,35,14,58,62,79,30,67,44,48]) === 13);
console.log(partitionDisjoint([32,57,24,19,0,24,49,67,87,87]) === 7);
console.log(partitionDisjoint([1,1]) === 1);
console.log(partitionDisjoint([5,0,3,8,6]) === 3);
console.log(partitionDisjoint([1,1,1,0,6,12]) === 4);
// @lc code=end

