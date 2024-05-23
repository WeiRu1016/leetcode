/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 一位数 = 1 - 9 = 1
 * 两位数 = 10 - 19 = 11
 *       = 20 - 99 = 8
 * 三位数 = 100 - 110 = 
 * 
 * 假设数字为 abcdef 计算有多少个n，转化成
 * 
 * bcdef 位数对应的 99999 的1的个数 = prev9
 *
 * a * prev9 代表了 099999，199999，299999.... (a-1)99999里面1的个数
 * 
 * abcdef 这个的1的个数 就是 bcdef 的个数 = prevCount
 * 
 * 如果 a > 1，则 1xxxxx 第一位1的个数就是 99999 + 1(从0开始)
 * 如果 a = 1，则 1bcdef 第一位1的个数就是 bcdef + 1(从0开始)
 * 
 * abcdef 的1的个数 = a * prev9 + prevCount + (a > 1 ? mod : last) + 1
 * 
 * 然后就可以递归的计算开始：
 */
var countDigitOne = function(n) {
    let mod = 1;
    let prev9 = 0;
    let prevCount = 0;
    while(n / mod >= 1) {
        const res = Math.floor((n % (mod * 10)) / mod);
        const last = n % mod;
        if (res > 0) {
            const count = res * prev9 + (res > 1 ? mod : last + 1) + prevCount;
            prevCount = count;
        }
        const count9 = 10 * prev9 + mod;
        prev9 = count9;
        mod = mod * 10;
    }
    return prevCount;
};
console.log(countDigitOne(100) === 21);
console.log(countDigitOne(0) === 0)
console.log(countDigitOne(9) === 1);
console.log(countDigitOne(99) === 20);
console.log(countDigitOne(13) === 6);
console.log(countDigitOne(20) === 12);
console.log(countDigitOne(10) === 2);
// @lc code=end

