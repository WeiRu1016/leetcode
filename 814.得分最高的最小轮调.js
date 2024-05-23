/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [814] 二叉树剪枝
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
 * @return {TreeNode}
 */
const isLeaf = node => !node.left && !node.right
var pruneTree = function(root) {
    if (!root) {
        return root;
    }
    if (root.left) {
        if (!isLeaf(root.left)) {
            pruneTree(root.left);
        }
        if (isLeaf(root.left) && root.left.val === 0) {
            root.left = null;
        }
    }
    if (root.right) {
        if (!isLeaf(root.right)) {
            pruneTree(root.right);
        }
        if (isLeaf(root.right) && root.right.val === 0) {
            root.right = null;
        }
    }
    if (isLeaf(root) && root.val === 0) {
        return null;
    }
    return root
};
// console.log(pruneTree({
//     val: 1,
//     right: {
//         val: 0,
//         left: {
//             val: 0
//         },
//         right: {
//             val: 1
//         }
//     }
// }));
// console.log(pruneTree({
//     val: 1,
//     left: {
//         val: 0,
//         left: { val: 0 },
//         right: { val: 0 }
//     },
//     right: {
//         val: 1,
//         left: { val: 0 },
//         right: { val: 1 }
//     }
// }));
// @lc code=end
// console.log(pruneTree({
//     val: 1,
//     left: {
//         val: 1,
//         left: {
//             val: 1,
//             left: { val: 0 }
//         },
//         right: { val: 1 }
//     },
//     right: {
//         val: 0,
//         left: { val: 0 },
//         right: { val: 1 }
//     }
// }))
