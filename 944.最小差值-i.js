/*
 * @lc app=leetcode.cn id=981 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let cols = 0;
    for (let i = 0, l = strs[0].length; i < l; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] < strs[j - 1][i]) {
                cols += 1;
                break;
            }
        }
    }
    return cols;
};
console.log(minDeletionSize(["cba","daf","ghi"]));
console.log(minDeletionSize(["a","b"]));
console.log(minDeletionSize(["zyx","wvu","tsr"]));
// @lc code=end

