/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
    let max = -Infinity;
    const helper = (node) => {
        if (!node) {
            return 0;
        }
        const left = helper(node.left);
        const right = helper(node.right);
        let nodeMax = node.val;
        if (node.left) {
            nodeMax = Math.max(nodeMax, left + node.val);
        }
        if (node.right) {
            nodeMax = Math.max(nodeMax, right + node.val);
        }
        max = Math.max(max, nodeMax);
        if (node.left) {
            max = Math.max(max, left);
        }
        if (node.right) {
            max = Math.max(max, right);
        }
        max = Math.max(max, left + right + node.val);
        return nodeMax;
    }
    helper(root);
    return max;
};
console.log(maxPathSum({ val: 1, left: { val: 2 }, right: { val: 3 } }));
console.log(maxPathSum({
    val: -10,
    left: { val: 9 },
    right: {
        val: 20,
        left: { val: 15 },
        right: { val: 7 }
    }
}));
console.log(maxPathSum({ val: -3 }));
// [1,-2,3]
console.log(maxPathSum({ val: 1, left: { val: -2 }, right: { val: 3 } }));
// [1,2,null,3,null,4,null,5]
console.log(maxPathSum({
    val: 1,
    left: { val: 2, left: { val: 3, left: { val: 4, left: { val: 5 } } } }
}))
// @lc code=end

