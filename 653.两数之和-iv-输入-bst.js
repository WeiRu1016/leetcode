/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const arr = [];

    const travser = (node) => {
        if (!node) {
            return;
        }
        travser(node.left);
        arr.push(node.val);
        travser(node.right);
    }

    travser(root);

    let start = 0
    let end = arr.length - 1;
    while(start <  end) {
        const sum = arr[start] + arr[end];
        if (sum === k) {
            return true;
        }
        if (sum > k) {
            end--;
        } else {
            start++;
        }
    }
    return false;
};
console.log(findTarget({ val: 2, left: { val: 1 }, right: { val: 3 } }, 3))
// @lc code=end

