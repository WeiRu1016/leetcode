/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
    if (!root) {
        return 0
    }
    let level = 0;
    const queue = [root];
    while(queue.length === Math.pow(2, level)) {
        const size = queue.length;
        level += 1;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node) {
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }
        }
    }
    return Math.pow(2, level) - 1 + queue.length;
};
console.log(countNodes({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        left: { val: 6 }
    },
}))
// @lc code=end

