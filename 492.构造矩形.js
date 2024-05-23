/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let W = Math.floor(Math.sqrt(area));

    while(area % W) {
        W--;
    }
    return [area / W, W];
};
// @lc code=end

