/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    const bfs = (count, sum, index, path) => {
        if (count === 0) {
            if (sum === 0) {
                result.push([...path]);
            }
            return;
        }
        if (sum > count * 9) {
            return;
        }
        for (let i = index; i < nums.length; i++) {
            bfs(count - 1, sum - nums[i], i + 1, [...path, nums[i]]);
        }
    }
    bfs(k, n, 0, []);
    return result;
};
console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 1));
// @lc code=end

