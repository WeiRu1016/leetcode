/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let node1 = null;
    let node2 = null;
    let prevNode = null;
    let end = false;
    const preTraverse = (node) => {
        if (end) {
            return;
        }
        if (node.left) {
            preTraverse(node.left);
        }
        if (prevNode != null && prevNode.val >= node.val) {
            if (node1 == null) {
                node1 = prevNode;
                node2 = prevNode = node;
            } else {
                node2 = node;
                end = true;
            }
        } else {
            prevNode = node;
        }

        if (node.right) {
            preTraverse(node.right);
        }
    }
    preTraverse(root);

    if (node1 && node2) {
        const v = node1.val;
        node1.val = node2.val;
        node2.val = v;
    }
    return root;
};
// [3,1,4,null,null,2]
console.log(recoverTree({
    val: 3,
    left: { val: 1 },
    right: { val: 4, left: { val: 2 } }
}));
// [4,2,null,1,null,null,3]
// @lc code=end

