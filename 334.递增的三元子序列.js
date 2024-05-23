/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let max1 = nums[0];
    let max2 = [];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (max2.length) {
            if (max2[1] < num) {
                return true;
            }
            if (max2[0] < num) {
                max2[1] = num;
            } else if (num > max1) {
                max2 = [max1, num];
            } else if (num < max1) {
                max1 = num;
            }
        } else {
            if (max1 < num) {
                max2 = [max1, num];
            } else {
                max1 = num;
            }
        }
    }
    return false;
};
console.log(increasingTriplet([6,7,1,2]) === false);
console.log(increasingTriplet([0,4,2,1,0,-1,-3]) === false);
console.log(increasingTriplet([20,100,10,12,5,13]) === true);
console.log(increasingTriplet([1,2,3,4,5]) === true);
console.log(increasingTriplet([5,4,3,2,1]) === false);
console.log(increasingTriplet([2,1,5,0,4,6]) === true);
// @lc code=end

