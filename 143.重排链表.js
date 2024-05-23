/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList1 = function(head) {
    const arr = [];
    let pos = head;
    while(pos) {
        arr.push(pos);
        pos = pos.next;
    }
    pos = head;
    for (let i = 0, l = Math.floor(arr.length / 2); i < l; i++) {
        const temp = pos.next;
        pos.next = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i].next = temp;
        pos = temp;
    }
    pos.next = null;
    return head;
};

var reorderList = function(head) {
    let slow = head;
    let fast = head;
    // 找到中部
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
        if (fast.next) {
            fast = fast.next;
        }
    }

    // 翻转后面的链表
    let prev = null;
    let pos = slow.next;
    slow.next = null;
    while(pos) {
        const temp = pos.next;
        pos.next = prev;
        prev = pos;
        pos = temp;
    }

    // 从头开始
    let leftHead = head;
    let rightHead = prev;

    while(leftHead && rightHead) {
        const tempLeft = leftHead;
        const tempRight = rightHead;
        leftHead = leftHead.next;
        rightHead = rightHead.next;

        const temp = tempLeft.next;
        tempLeft.next = tempRight;
        tempRight.next = temp;
    }
    return head;
}

console.log(JSON.stringify(reorderList({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
})));
// @lc code=end

