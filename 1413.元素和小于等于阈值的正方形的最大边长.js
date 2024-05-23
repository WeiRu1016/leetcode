/*
 * @lc app=leetcode.cn id=1514 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let min = 0;
    nums.reduce((prev, num) => {
        const res = prev + num;
        if (res < min) {
            min = res;
        }
        return res;
    }, 0);

    return 1 - min;
};
console.log(minStartValue([-3,2,-3,4,2]));
console.log(minStartValue([1, 2]));
console.log(minStartValue([1, -2, -3]));
// @lc code=end

