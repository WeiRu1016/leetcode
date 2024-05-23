/*
 * @lc app=leetcode.cn id=822 lang=javascript
 *
 * [822] 翻转卡片游戏
 */

// @lc code=start
/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
    let result = Infinity;

    const sameNums = new Set();

    for (let i = 0; i < fronts.length; i++) {
        if (fronts[i] === backs[i]) {
            sameNums.add(fronts[i]);
        }
    }
    
    for (let i = 0; i < fronts.length; i++) {
        if (fronts[i] < result && !sameNums.has(fronts[i])) {
            result = fronts[i];
        }

        if (backs[i] < result && !sameNums.has(backs[i])) {
            result = backs[i];
        }
    }

    return isFinite(result) ? result : 0;
};
console.log(flipgame([1,2,4,4,7], [1,3,4,1,3]) === 2);
console.log(flipgame([1], [1]) === 0);
console.log(flipgame([1], [2]) === 1);
console.log(flipgame([1,1], [1, 2]) === 2);
console.log(flipgame([3,1,5,6,3,1,4,5,6,5,7,2,5,3,4,3,1,4,6,2], [6,1,7,6,8,2,4,1,6,5,7,2,3,6,6,3,2,4,4,2]));
// @lc code=end

