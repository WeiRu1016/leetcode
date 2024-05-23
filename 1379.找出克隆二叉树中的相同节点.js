/*
 * @lc app=leetcode.cn id=1379 lang=javascript
 *
 * [1379] 找出克隆二叉树中的相同节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const dfs = (node1, node2) => {
        if (!node1 || !node2) {
            return null;
        }
        if (node1 === target) {
            return node2;
        }
        return dfs(node1.left, node2.left) || dfs(node1.right, node2.right);
    }
    return dfs(original, cloned);
};
// @lc code=end

