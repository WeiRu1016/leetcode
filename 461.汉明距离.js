/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance1 = function(x, y) {
    let count = 0;
    while(x || y) {
        if (x % 2 !== y % 2) {
            count += 1;
        }
        x = x >> 1;
        y = y >> 1;
    }
    return count;
};
// 异或之后数1
var hammingDistance2 = function(x, y) {
    let temp = x ^ y;
    let count = 0;
    while(temp) {
        count += temp & 1;
        temp >>= 1;
    }
    return count;
};
// x 和 x - 1 &就会消除1个1
var hammingDistance = function(x, y) {
    let temp = x ^ y;
    let count = 0;
    while(temp) {
        temp &= (temp - 1);
        count += 1;
    }
    return count;
};
console.log(hammingDistance(1, 4))
console.log(hammingDistance(3, 1))
// @lc code=end

