/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];
    const dfs = (node) => {
        if (!node) {
            return;
        }
        if (node.children) {
            for (let item of node.children) {
                dfs(item);
            }
        }
        result.push(node.val);
    };
    dfs(root);
    return result;
};
// @lc code=end

