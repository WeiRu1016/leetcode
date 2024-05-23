/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums1 = function(nums) {
    const { sum, diver, sum1, diver1 } = nums.reduce((prev, num, i) => {
        return {
            sum1: prev.sum1 + (i + 1),
            diver1: prev.diver1 * (i + 1),
            sum: prev.sum + num,
            diver: prev.diver * num,
        }
    }, { sum: 0, diver: 1, sum1: 0, diver1: 1 });

    const y = (sum1 - sum) * diver1 / (diver1 - diver);
    const x = (y * diver) / diver1;

    return [x, y];
};

var findErrorNums = function(nums) {
    let x;
    let y;
    for (let i = 0; i < nums.length; i++) {
        while(nums[i] !== i + 1) {
            if (nums[nums[i] - 1] === nums[i]) {
                x = nums[i];
                y = i + 1;
                break;
            } else {
                const temp = nums[nums[i] - 1];
                nums[nums[i] - 1] = nums[i];
                nums[i] = temp;
            }
        }
    }
    return [x, y];
}
console.log(findErrorNums([3,2,2]));
console.log(findErrorNums([1,2,2,4]));
console.log(findErrorNums([1, 1]))
// @lc code=end

