/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const values = [];
    const dfs = (node) => {
        if (!node) {
            return;
        }
        dfs(node.left);
        values.push(node.val);
        dfs(node.right);
    }

    dfs(root);

    let min = Infinity;
    for (let i = 1; i < values.length; i++) {
        min = Math.min(min, values[i] - values[i - 1]);
    }
    return min;
};
// @lc code=end

