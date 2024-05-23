/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const arr = [];
    for (let i = 0; i < citations.length; i++) {
        arr[citations[i]] = (arr[citations[i]] || 0) + 1;
    }
    let num = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) {
            num = num + arr[i];
        }

        if (num >= i) {
            return i;
        }
    }
    return 0;
};
// 优化一下，因为h代表h篇论文至少被引用h次，所有h一定 <= citations.length(论文篇数)
// 所有 arr 可以缩减到 n + 1 大小
var hIndex = function(citations) {
    const n = citations.length;
    const arr = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n) {
            arr[n] += 1;
        } else {
            arr[citations[i]] += 1;
        }
    }
    let num = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) {
            num = num + arr[i];
        }

        if (num >= i) {
            return i;
        }
    }
    return 0;
};
console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1,3,1]));
// @lc code=end

