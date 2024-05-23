/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const map = {
        H: 0,
        D: 0,
    };
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') {
            map.D += 1;
        } else if (moves[i] === 'D') {
            map.D -= 1;
        } else if (moves[i] === 'L') {
            map.H += 1;
        } else if (moves[i] === 'R') {
            map.H -= 1;
        }
    }
    return map.H === 0 && map.D === 0;
};
// @lc code=end

