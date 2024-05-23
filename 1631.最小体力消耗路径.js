/*
 * @lc app=leetcode.cn id=1631 lang=javascript
 *
 * [1631] 最小体力消耗路径
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath1 = function(heights) {
    const dp = Array.from(Array(heights.length), () => []);
    dp[0][0] = 0;

    const rows = heights.length - 1;
    const cols = heights[0].length - 1;
    const bfs = (row, col, path) => {
        if (row === rows && col === cols) {
            return;
        }
        [
            [row - 1, col], // 上面
            [row, col + 1], // 右边
            [row + 1, col], // 下面
            [row, col - 1], // 左边
        ].forEach(([i, j]) => {
            if (i >= 0 && i <= rows && j >= 0 && j <= cols && !path[i][j]) {
                const value = Math.max(dp[row][col], Math.abs(heights[row][col] - heights[i][j]));
                if (dp[i][j] == undefined || value < dp[i][j]) {
                    dp[i][j] = value;
                    path[i][j] = true;
                    bfs(i, j, path);
                    path[i][j] = false;
                }
            }
        })
    }
    const path = Array.from(Array(rows + 1), () => Array(cols + 1).fill(false));
    bfs(0, 0, path);
    return dp[rows][cols];
};
var minimumEffortPath = function(heights) {
    const dp = Array.from(Array(heights.length), () => []);
    const updateDp = (x, y) => {
        let oldDp = dp[x][y];
        const validSliding = [
            [x - 1, y],
            [x, y + 1],
            [x + 1, y],
            [x, y - 1]
        ].filter(([x1, y1]) => {
            if (x1 >= 0 && x1 < heights.length && y1 >= 0 && y1 < heights[0].length) {
                return dp[x1][y1] != undefined;
            }
        });

        validSliding.forEach(([x1, y1]) => {
            dp[x][y] = Math.min(dp[x][y], Math.max(dp[x1][y1], Math.abs(heights[x1][y1] - heights[x][y])));
        });

        if (dp[x][y] < oldDp) {
            validSliding.forEach(([x1, y1]) => updateDp(x1, y1));
        }
    };
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[i].length; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 0;
                continue;
            }
            dp[i][j] = Infinity;
            // 上面
            if (i > 0) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[i - 1][j], Math.abs(heights[i][j] - heights[i - 1][j])));
            }
            // 左边
            if (j > 0) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[i][j - 1], Math.abs(heights[i][j] - heights[i][j - 1])));
            }
            // 更新上面
            if (i > 0) {
                updateDp(i - 1, j);
            }
            // 更新左边
            if (j > 0) {
                updateDp(i, j - 1);
            }
        }
    }
    return dp[heights.length - 1][heights[0].length - 1];
};
console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]])); // 2
console.log(minimumEffortPath([[1,2,3],[3,8,4],[5,3,5]])); // 1
console.log(minimumEffortPath([
    [1,2,1,1,1],
    [1,2,1,2,1],
    [1,2,1,2,1],
    [1,2,1,2,1],
    [1,1,1,2,1]
])); // 0
// @lc code=end

