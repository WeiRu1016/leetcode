/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let pos1 = head;
  let pos2 = head;
  while (pos2 && pos2.next) {
    pos1 = pos1.next;
    pos2 = pos2.next;
    if (pos2) {
      pos2 = pos2.next;
    }
  }
  return pos1;
};
// @lc code=end
