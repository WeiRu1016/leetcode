/*
 * @lc app=leetcode.cn id=1851 lang=javascript
 *
 * [1851] 包含每个查询的最小区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
    let min = Infinity;
    let max = -Infinity;
    let minInterval = null;
    intervals.forEach(([left, right]) => {
        min = Math.min(min, left);
        max = Math.max(max, right);
        if (!minInterval || minInterval[1] - minInterval[0] > right - left) {
            minInterval = [left, right];
        }
    });

    return queries.map((num) => {
        if (num < min || num > max) {
            return -1;
        }
        if (num >= minInterval[0] && num <= minInterval[1]) {
            return minInterval[1] - minInterval[0] + 1;
        }
        let index = -1;
        intervals.forEach(([left, right], i) => {
            if (num >= left && num <= right) {
                if (index === -1 || right - left < intervals[index][1] - intervals[index][0]) {
                    index = i;
                }
            }
        })
        if (index === -1) {
            return -1;
        }
        return intervals[index][1] - intervals[index][0] + 1;
    })
};
console.log(minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]));
console.log(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]));
// @lc code=end

