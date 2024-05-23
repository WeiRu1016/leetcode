/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n === 0) {
            return true;
        }
        if (flowerbed[i] === 0) {
            if (i === 0 || flowerbed[i - 1] === 0) {
                if (i + 1 >= flowerbed.length || flowerbed[i + 1] === 0) {
                    flowerbed[i] = 1;
                    n -= 1;
                }
            }
        }
    }
    return n === 0;
};
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));
// console.log(canPlaceFlowers([0,0,1,0,1], 1));
// console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2));
// console.log(canPlaceFlowers([1,0,0,0,1], 1));
// @lc code=end

