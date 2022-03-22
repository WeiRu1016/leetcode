/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 递归
var buildTree1 = function(inorder, postorder) {
    if (inorder.length <= 0) {
        return null;
    }
    const val = postorder[postorder.length - 1];
    const node = { val, left: null, right: null };
    const leftIndex = inorder.indexOf(val);
    node.left = buildTree(inorder.slice(0, leftIndex), postorder.slice(0, leftIndex));
    node.right = buildTree(inorder.slice(leftIndex + 1), postorder.slice(leftIndex, postorder.length - 1));
    return node;
};
// 迭代
const buildTree = function(inorder, postorder) {
    if (postorder.length === 0) {
        return null;
    }
    const root = { val: postorder[postorder.length - 1], left: null, right: null };
    const stack = [root];
    let rightIndex = inorder.length - 1;

    for (let i = postorder.length - 2; i >= 0; i--) {
        val = postorder[i];
        const node = { val, left: null, right: null };

        let top = stack[stack.length - 1];
        // 右边没结束了
        if (top.val !== inorder[rightIndex]) {
            top.right = node;
        } else { // 右边结束了
            while(stack.length > 0 && stack[stack.length - 1].val === inorder[rightIndex]) {
                top = stack.pop();
                rightIndex--;
            }
            top.left = node;
        }
        stack.push(node);
    }
    return root;
}
console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]));
// console.log(buildTree([3,2,1], [3,2,1]))
// @lc code=end

