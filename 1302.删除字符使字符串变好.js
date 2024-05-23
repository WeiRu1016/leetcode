/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1957] 删除字符使字符串变好
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {

};
// @lc code=end

// 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。
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
var deepestLeavesSum = function(root) {
    let result = 0;
    const queue = [root];

    while(queue.length) {
        const count = queue.length;
        result = 0;
        for (let i = 0; i < count; i++) {
            const node = queue.shift();
            result += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return result;
};
