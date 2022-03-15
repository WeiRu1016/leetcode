/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [pos1, pos2] = edges[0];
    const [temp1, temp2] = edges[1];
    
    if (pos1 === temp1 || pos1 === temp2) {
        return pos1;
    }

    return pos2;
};
console.log(findCenter([[1, 2], [2, 3], [4, 2]]));
// @lc code=end

