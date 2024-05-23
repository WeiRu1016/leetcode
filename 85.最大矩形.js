/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 优化点，宽度计算可以缓存一下，可以提高运行速度
var maximalRectangle1 = function(matrix) {
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                let yEnd = j + 1;
                for (; yEnd < matrix[i].length; yEnd++) {
                    if (matrix[i][yEnd] === '0') {
                        break;
                    }
                }
                max = Math.max(yEnd - j, max);
                let xEnd = i + 1;
                for (; xEnd < matrix.length; xEnd++) {
                    for (let k = j; k < yEnd; k++) {
                        if (matrix[xEnd][k] === '0') {
                            yEnd = k;
                        }
                    }
                    max = Math.max((yEnd - j) * (xEnd - i + 1), max);
                }
                max = Math.max((yEnd - j) * (xEnd - i), max);
            }
        }
    }
    return max;
};
var maximalRectangle2 = function(matrix) {
    const widthArray = matrix.reduce((prev, item, index) => {
        prev[index] = Array(item.length).fill(0);
        return prev;
    }, []);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                widthArray[i][j] = j === 0 ? 1 : widthArray[i][j - 1] + 1;
            }
        }
    }
    
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                let width = widthArray[i][j];
                let area = width;
                for (let k = 1; k + i < matrix.length; k++) {
                    width = Math.min(width, widthArray[k + i][j]);
                    area = Math.max(width * (k + 1), area);
                }
                max = Math.max(area, max);
            }
        }
    }
    return max;
};
var maximalRectangle = function(matrix) {
    let dps = [];
    let prevDeps = [];
    let maxArea = 0;
    for (let row = 0; row < matrix.length; row++) {
        prevDeps = dps;
        dps = [];
        for (let col = 0; col < matrix[row].length; col++) {
            dps[col] = [];
            if (matrix[row][col] === '1') {
                let width = 1;
                let height = 1;
                // 左边
                if (col > 0 && dps[col - 1].length > 0) {
                    const max = Math.max.apply(null, dps[col - 1].map(({ width }) => width));
                    width = max + 1;
                }
                dps[col] = [{ width, height }];
                maxArea = Math.max(maxArea, width * height);
                // 上边
                if (row > 0) {
                    prevDeps[col].forEach((top) => {
                        width = Math.min(top.width, width);
                        height = top.height + 1;
                        dps[col].push({ width, height });
                        maxArea = Math.max(maxArea, width * height);
                    })
                }
            }
        }
    }
    
    return maxArea;
};
console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]) === 6);
console.log(maximalRectangle([["0"]]) === 0);
console.log(maximalRectangle([["1"]]) === 1);
console.log(maximalRectangle([["0","0"]]) === 0);
console.log(maximalRectangle([["1","1"]]) === 2);
console.log(maximalRectangle([["0","1"],["1","0"]]) === 1);
console.log(maximalRectangle(
    [
        ["0","0","0","1","0","1","1","1"],
        ["0","1","1","0","0","1","0","1"],
        ["1","0","1","1","1","1","0","1"],
        ["0","0","0","1","0","0","0","0"],
        ["0","0","1","0","0","0","1","0"],
        ["1","1","1","0","0","1","1","1"],
        ["1","0","0","1","1","0","0","1"],
        ["0","1","0","0","1","1","0","0"],
        ["1","0","0","1","0","0","0","0"]
    ]
) === 4)
// @lc code=end

