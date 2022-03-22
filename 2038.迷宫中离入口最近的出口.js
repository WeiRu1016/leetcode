/*
 * @lc app=leetcode.cn id=2149 lang=javascript
 *
 * [2038] 如果相邻两个颜色均相同则删除当前颜色
 */

// @lc code=start
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let countA = 0;
    let countB = 0;
    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i] === colors[i - 1] && colors[i] === colors[i + 1]) {
            if (colors[i] === 'A') {
                countA += 1; 
            } else {
                countB += 1;
            }
        }
    }

    return countA > countB;
};
// console.log(winnerOfGame("AAABABB"));
// console.log(winnerOfGame("AA"));
// console.log(winnerOfGame("ABBBBBBBAAA"))
// @lc code=end

