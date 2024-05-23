/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from(Array(n), (_, i) => {
        const num = i + 1;
        const mod3 = num % 3;
        const mod5 = num % 5;

        if (mod3 === 0 && mod5 === 0) {
            return "FizzBuzz";
        }
        if (mod3 === 0) {
            return "Fizz";
        }
        if (mod5 === 0) {
            return "Buzz";
        }
        return `${num}`;
    })
};
// @lc code=end

