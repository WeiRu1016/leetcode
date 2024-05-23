/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife1 = function(board) {
    const diff = [];

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        const row = board[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const liveCount = ([
                [-1, -1], [-1, 0], [-1, 1],
                [0, -1], [0, 1],
                [1, -1], [1, 0], [1, 1]
            ]).reduce((prev, [x, y]) => {
                const _rowIndex = rowIndex + x;
                const _colIndex = colIndex + y;
                if (_rowIndex >= 0 && _rowIndex < board.length && _colIndex >= 0 && _colIndex < row.length) {
                    let v = board[_rowIndex][_colIndex];
                    if (diff[_rowIndex] && diff[_rowIndex][_colIndex] !== undefined) {
                        v = diff[_rowIndex][_colIndex];
                    }
                    if (v === 1) {
                        prev += 1;
                    }
                }
                return prev;
            }, 0);
            const value = board[rowIndex][colIndex];
            // 活细胞
            if (value === 1 && (liveCount < 2 || liveCount > 3)) {
                diff[rowIndex] = diff[rowIndex] || [];
                diff[rowIndex][colIndex] = 1;
                board[rowIndex][colIndex] = 0;
            } else if (value === 0 && liveCount === 3) {
                diff[rowIndex] = diff[rowIndex] || [];
                diff[rowIndex][colIndex] = 0;
                board[rowIndex][colIndex] = 1;
            }
        }
    }
    return board;
};
// 可以用-1表示 从 1 -> 0 用2表示 从 0 -> 1
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
    const getLiveCount = (rowIndex, colIndex) => {
        return ([
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ]).reduce((prev, [x, y]) => {
            const _rowIndex = rowIndex + x;
            const _colIndex = colIndex + y;
            if (_rowIndex >= 0 && _rowIndex < m && _colIndex >= 0 && _colIndex < n) {
                let v = board[_rowIndex][_colIndex];
                if (v === 1 || v === -1) {
                    prev += 1;
                }
            }
            return prev;
        }, 0);
    }

    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        for (let colIndex = 0; colIndex < n; colIndex++) {
            const value = board[rowIndex][colIndex];
            const liveCount = getLiveCount(rowIndex, colIndex);

            // 活细胞
            if (value === 1 && (liveCount < 2 || liveCount > 3)) {
                // 从 1 -> 0
                board[rowIndex][colIndex] = -1;
            } else if (value === 0 && liveCount === 3) {
                // 从 0 -> 1
                board[rowIndex][colIndex] = 2;
            }
        }
    }
    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        for (let colIndex = 0; colIndex < n; colIndex++) {
            if (board[rowIndex][colIndex] > 0) {
                board[rowIndex][colIndex] = 1
            } else {
                board[rowIndex][colIndex] = 0;
            }
        }
    }
    return board;
};
console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));
// @lc code=end

