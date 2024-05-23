/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let count1 = 0;
  let count2 = 0;
  let head1 = headA;
  let head2 = headB;
  while (head1) {
    count1 += 1;
    head1 = head1.next;
  }
  while (head2) {
    count2 += 1;
    head2 = head2.next;
  }
  while (count1 > count2) {
    count1 -= 1;
    headA = headA.next;
  }
  while (count2 > count1) {
    count2 -= 1;
    headB = headB.next;
  }
  while (headA && headB && headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA === headB ? headA : null;
};
