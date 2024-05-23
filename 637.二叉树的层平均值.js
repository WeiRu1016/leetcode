/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const result = [];
    let stack = [root];
    while(stack.length) {
        let rowSum = 0;
        let count = 0;
        for (let i = 0, l = stack.length; i < l; i++) {
            const node = stack.shift();
            if (node) {
                rowSum += node.val;
                count += 1;
                node.left && stack.push(node.left);
                node.right && stack.push(node.right);
            }
        }
        result.push(rowSum / count);
    }
    return result;
};
// @lc code=end

