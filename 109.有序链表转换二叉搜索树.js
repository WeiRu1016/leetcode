/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const array = [];
    while(head) {
        array.push(head.val);
        head = head.next;
    }
    const temp = (start, end) => {
        if (start >= end) {
            return null;
        }
        if (start - end === 1) {
            return {
                val: array[start],
            }
        }
        const center = Math.floor((start + end) / 2);
        const left = temp(start, center);
        const right = temp(center + 1, end);
        return {
            val: array[center],
            left,
            right,
        }
    }
    return temp(0, array.length);
};
console.log(sortedListToBST({
    val: -10,
    next: {
        val: -3,
        next: {
            val: 0,
            next: {
                val: 5,
                next: {
                    val: 9,
                }
            }
        }
    }
}));
// @lc code=end

