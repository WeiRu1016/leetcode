/*
 * @lc app=leetcode.cn id=2170 lang=javascript
 *
 * [2044] 统计按位或能得到最大值的子集数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let max = 0;
    let count = 0;

    const bfs = (index, value) => {
        if (index >= nums.length) {
            if (value > max) {
                count = 1;
                max = value;
            } else if (value === max) {
                count += 1;
            }
            return;
        }

        bfs(index + 1, value | (nums[index]));
        bfs(index + 1, value);
    }
    bfs(0, 0);
    return count;
};
// console.log(countMaxOrSubsets([3,1,3,2,4,3]));
// console.log(countMaxOrSubsets([3, 1]) === 2);
// console.log(countMaxOrSubsets([2,2,2]) === 7);
// console.log(countMaxOrSubsets([3,2,1,5]) === 6);
// @lc code=end

