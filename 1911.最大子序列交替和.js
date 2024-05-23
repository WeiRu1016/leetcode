/*
 * @lc app=leetcode.cn id=1911 lang=javascript
 *
 * [1911] 最大子序列交替和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 贪心算法
 * 
 * 当前 nums[i] 只有 在 / 不在 2种可能
 * 
 * 然后根据前面的计算
 * - 如果是已经是 奇数个 数组了，那么 nums[i] 放进去的话就应该是 +nums[i]（多了个偶数位嘛），长度变成偶数
 * - 如果是已经是 偶数个 数组了，那么 nums[i] 放进去的话就应该是 -nums[i]（多了个偶数位嘛），长度变成奇数
 * 
 * 那么只需要 记住当前 最大的 奇数位 结果 和 最大的 偶数位 结果
 * 
 * 即可得到最终结果
 */
var maxAlternatingSum = function(nums) {
    let even = 0;
    let odd = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // 偶数
        even = Math.max(even, odd - nums[i]);
        // 奇数
        odd = Math.max(odd, even + nums[i]);
    }

    return Math.max(even, odd);;
};
console.log(maxAlternatingSum([4,2,5,3])); // 7
console.log(maxAlternatingSum([5,6,7,8]) === 8);
console.log(maxAlternatingSum([6,2,1,2,4,5]) === 10);
console.log(maxAlternatingSum([374,126,84,237,195,139,328,353,286,113,351,167,394,398,29,118,17,162,206,138,34,109,291,368,162,109,336,256,203,330,235,74,136,72,127,382,288,276,135,383,300,220,299,205,186,113,71,261,253,47,387,25,57,79,322,82,349,217,306,33,198,196,306,240,271,129,284,6,349,370,59,350,275,385,137,394,329,175,58,151,223,81,233,2,370,369,135,257,391,92,260,55,321,153,328,260,312,102,79,192]));

// @lc code=end

