/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
// 二分可以优化一下
var hIndex = function(citations) {
    for (let i = citations.length - 1; i >= 0; i--) {
        const num = citations.length - i;
        let prev = i > 0 ? citations[i - 1] : 0;

        if (num >= citations[i]) {
            return citations[i];
        }

        if (num > prev) {
            return num;
        }
    }
    return 0;
};
console.log(hIndex([0, 1, 3, 5, 6]));
console.log(hIndex([1, 2, 100]));
console.log(hIndex([100]));
// @lc code=end

