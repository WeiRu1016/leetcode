/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const answer = [];
    let maxIndex = -1;
    for (let i = 0; i <= nums.length - k; i++) {
        let j;
        if (maxIndex < i) {
            maxIndex = i;
            j = i;
        } else {
            j = i - 1 + k;
        }
        for (; j < i + k; j++) {
            if (nums[j] > nums[maxIndex]) {
                maxIndex = j;
            }
        }
        answer.push(nums[maxIndex]);
    }
    return answer;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// @lc code=end

