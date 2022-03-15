/*
 * @lc app=leetcode.cn id=1706 lang=javascript
 *
 * [1706] 球会落何处
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 var findBall1 = function(grid) {
    const ans = [];
    const n = grid[0].length;
    for (let j = 0; j < n; j++) {
        let col = j;
        for (let row = 0; row < grid.length; row++) {
            const dir = grid[row][col];
            col += dir;
            if (col < 0 || col === n || grid[row][col] !== dir) {
                col = -1;
                break;
            }
        }
        ans[j] = col;
    }
    return ans;
};
// console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]));
// console.log(findBall([[-1]]));
// console.log(findBall([
//     [1,1,1,1,1,1],
//     [-1,-1,-1,-1,-1,-1],
//     [1,1,1,1,1,1],
//     [-1,-1,-1,-1,-1,-1]
// ])); // 0,1,2,3,4,-1
// @lc code=end

