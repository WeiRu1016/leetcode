/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1;
    let end = n;
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        const result = guess(mid);
        if (result === 0) {
            return mid;
        }
        if (result === 1) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};
console.log(guessNumber(10, 6));
console.log(guessNumber(1, 1));
// @lc code=end

