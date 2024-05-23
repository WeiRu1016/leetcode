/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
/**
 * 插入排序是指
 * 1. 从头开始先找到一个有序列
 * 2. 从有序列后面第一个节点开始，是需要插入的节点
 * 3. 在有序列中找到插入该节点的位置
 * 4. 删除需要插入的节点，插入到插入位置
 */
var insertionSortList = function(head) {
    if (!head) {
        return null;
    }
    const result = { next: head };
    let lastSorted = result.next;
    let current = lastSorted.next;

    while(current) {
        if (lastSorted.val <= current.val) {
            lastSorted = lastSorted.next;
        } else { // 开始找插入位置
            let prev = result;
            while(prev.next.val <= current.val) {
                prev = prev.next;
            }
            lastSorted.next = current.next;
            current.next = prev.next;
            prev.next = current;
        }
        current = lastSorted.next;
    }
    return result.next;
};
console.log(insertionSortList({
    val: 1,
    next: {
        val: 1
    }
}));
// [-1,5,3,4,0]
// console.log(insertionSortList({
//     val: -1,
//     next: {
//         val: 5,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 0
//                 }
//             }
//         }
//     }
// }));
console.log(JSON.stringify(insertionSortList({
    val: 4,
    next: {
        val: 2,
        next: {
            val: 1,
            next: {
                val: 3,
                next: null
            }
        }
    }
})));
// @lc code=end

