/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let result = 0;
    const bfs = (rest, value) => {
        if (!rest.length) {
            result = Math.max(result, value);
            return;
        }
        for (let i = 0; i < rest.length; i++) {
            const left = i > 0 ? rest[i - 1] : 1;
            const right = i < rest.length - 1 ? rest[i + 1] : 1;
            const newRest = [...rest];
            newRest.splice(i, 1);
            bfs(newRest, value + left * rest[i] * right);
        }
    };
    bfs(nums, 0);
    return result;
};
// console.log(maxCoins([3,1,5,8]));
// console.log(maxCoins([1,5]));
console.log(maxCoins([7,9,8,0,7,1,3,5,5,2,3]));
// @lc code=end

