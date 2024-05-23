/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let slowStep = 0;
    let fast = head.next;
    let fastStep = 1;
    while(slow !== fast) {
        if (!fast || !fast.next) {
            return null;
        }
        slow = slow.next;
        slowStep += 1;
        fast = fast.next.next;
        fastStep += 2;
    }
    // const roundCount = fastStep - slowStep;
};
// @lc code=end

