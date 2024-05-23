/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let res = 1;
  const getHeight = (node) => {
    if (!node) {
      return 0;
    }
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    res = Math.max(res, leftHeight + rightHeight + 1);

    return Math.max(leftHeight, rightHeight) + 1;
  };
  getHeight(root);
  return res - 1;
};
// [3,1,null,null,2]
console.log(
  diameterOfBinaryTree({
    val: 1,
    left: {
      val: 2,
      left: { val: 4 },
      right: { val: 5 },
    },
    right: {
      val: 3,
    },
  })
);
// @lc code=end
