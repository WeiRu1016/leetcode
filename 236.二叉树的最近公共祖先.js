/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const map = new Map();
    const dfs = (node, parent) => {
        map.set(node, parent);
        node.left && dfs(node.left, node);
        node.right && dfs(node.right, node);
    }
    dfs(root, null);
    const pParents = new Set();
    while(p) {
        pParents.add(p);
        p = map.get(p);
    }

    while(q) {
        if (pParents.has(q)) {
            return q;
        }
        q = map.get(q);
    }

    return null
};
// @lc code=end

