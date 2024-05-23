/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones1 = function(jewels, stones) {
    const jewelSet = new Set(jewels.split(''));
    let count = 0;
    for (const s of stones) {
        if (jewelSet.has(s)) {
            count += 1;
        }
    }
    return count;
};

var numJewelsInStones2 = function(jewels, stones) {
    let count = 0;
    for (const s of stones) {
        if (jewels.includes(s)) {
            count += 1;
        }
    }
    return count;
};
var numJewelsInStones = function(jewels, stones) {
    
};
// @lc code=end

