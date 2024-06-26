/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) {
        return root
    }
    const arr = [];
    const dfs = (node) => {
        node.left && dfs(node.left);
        arr.push(node.val);
        node.right && dfs(node.right);
    }
    dfs(root);
    return arr[k - 1];
};
console.log(kthSmallest({
    val: 3,
    left: { val: 1, right: { val: 2 } },
    right: { val: 4 }
}, 1))
// @lc code=end

