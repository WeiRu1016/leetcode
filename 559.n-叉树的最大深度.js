/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let result = 0;
  if (root.children) {
    root.children.forEach((child) => {
      result = Math.max(result, maxDepth(child));
    });
  }
  return result + 1;
};
console.log(
  maxDepth({
    val: 1,
    children: [
      {
        val: 3,
        children: [
          {
            val: 5,
          },
          {
            val: 6,
          },
        ],
      },
      {
        val: 2,
      },
      {
        val: 4,
      },
    ],
  })
);
// @lc code=end
