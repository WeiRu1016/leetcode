/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * O(n^2)
 */
var maximumGap1 = function(nums) {
    let max = -Infinity;
    for (let i = 0; i < nums.length - 1; i++) {
        let left = -Infinity;
        let right = Infinity;
        for (let j = 0; j < nums.length; j++) {
            if (i === 0) {
                continue;
            }
            // 左边
            if (nums[j] <= nums[i]) {
                left = Math.max(left, nums[j]);
            } else { // 右边
                right = Math.min(right, nums[j]);
            }
        }
        if (Number.isFinite(left)) {
            max = Math.max(max, nums[i] - left);
        }
        if (Number.isFinite(right)) {
            max = Math.max(max, right - nums[i]);
        }
    }
    return max;
};

/**
 * 桶排序
 * N个数，最大间距 一定 大于等于 (max - min) / (N - 1)
 * 所以 把 (max - min) / (N - 1) 作为间距设置桶，那么最大间距一定在 两个桶之间
 * 只需要比较前一个桶的 最大值 和 后一个桶的 最小值的间距即可
*/
var maximumGap = function(nums) {
    if (nums.length <= 1) {
        return 0;
    }
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const d = Math.max(1, Math.floor((max - min) / (nums.length - 1)));
    const bucketSize = Math.floor((max - min) / d) + 1;
    const buckets = Array.from(Array(bucketSize), () => []);
    for (let i = 0; i < nums.length; i++) {
        const bucketIndex = Math.floor((nums[i] - min) / d);
        const bucket = buckets[bucketIndex];
        if (bucket.length === 0) {
            bucket[0] = bucket[1] = nums[i];
        }  else {
            bucket[0] = Math.min(nums[i], bucket[0]);
            bucket[1] = Math.max(nums[i], bucket[1]);
        }
    }

    let maxGap = 0;
    let prevBucket = buckets[0];

    for (let i = 1; i < buckets.length; i++) {
        const bucket = buckets[i];
        if (bucket.length > 0) {
            maxGap = Math.max(maxGap, bucket[0] - prevBucket[1]);
            prevBucket = bucket;
        }
    }
    return maxGap;
}
console.log(maximumGap([3,6,9,1]));
// @lc code=end

