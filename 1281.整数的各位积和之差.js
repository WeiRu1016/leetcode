/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let mul = 1;
    while(n) {
        const temp = n % 10;
        n = (n - temp) / 10;
        sum += temp;
        mul *= temp;
    }
    return mul - sum;
};
console.log(subtractProductAndSum(234) === 15);
console.log(subtractProductAndSum(4421) === 21);
// @lc code=end

