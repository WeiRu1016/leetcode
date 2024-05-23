/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const bfs = (node) => {
        if (!node) {
            return sum;
        }
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }
        bfs(node.left, sum);
        bfs(node.right, sum);
    }
    bfs(root);
    return sum;
};
// @lc code=end

