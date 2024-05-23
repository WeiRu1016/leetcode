/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const result = [];
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[i].length; j++) {
            result[i] = result[i] || [];
            let sum = img[i][j];
            let count = 1;
            // 上面一行
            if (i >= 1) {
                if (j >= 1) {
                    sum += img[i - 1][j - 1];
                    count += 1;
                }
                sum += img[i - 1][j];
                count += 1;
                if (j < img[i].length - 1) {
                    sum += img[i - 1][j + 1];
                    count += 1;
                }
            }
            // 自己这一行
            if (j >= 1) {
                sum += img[i][j - 1];
                count += 1;
            }
            if (j < img[i].length - 1) {
                sum += img[i][j + 1];
                count += 1;
            }
            // 下面一行
            if (i < img.length - 1) {
                if (j >= 1) {
                    sum += img[i + 1][j - 1];
                    count += 1;
                }
                sum += img[i + 1][j];
                count += 1;
                if (j < img[i].length - 1) {
                    sum += img[i + 1][j + 1];
                    count += 1;
                }
            }
            result[i][j] = Math.floor(sum / count);
        }
    }
    return result;
};
// @lc code=end

