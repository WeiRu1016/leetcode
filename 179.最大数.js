/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber1 = function(nums) {
    const arr = [];
    for(let i = 0; i < nums.length; i++) {
        const top = nums[i].toString()[0];
        arr[top] = arr[top] || { next: null };
        let pos = arr[top];
        while(pos.next) {
            const str1 = pos.next.val.toString();
            const str2 = nums[i].toString();
            if (str1 + str2 > str2 + str1) {
                pos = pos.next;
            } else {
                break;
            }
        }
        const node = { val: nums[i], next: null };

        node.next = pos.next;
        pos.next = node;
    }
    if (arr.length === 1 && arr[0]) {
        return '0';
    }
    let str = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        let head = arr[i];
        while(head && head.next) {
            str += `${head.next.val}`;
            head = head.next;
        }
    }
    return str;
};
var largestNumber = function(nums) {
    const head = { next: null };
    for (let i = 0; i < nums.length; i++) {
        let pos = head;
        while(pos.next) {
            const str1 = pos.next.val.toString();
            const str2 = nums[i].toString();
            if (str1 + str2 > str2 + str1) {
                pos = pos.next;
            } else {
                break;
            }
        }
        const node = { val: nums[i], next: null };

        node.next = pos.next;
        pos.next = node;
    }
    let str = '';
    if (head.next.val === 0) {
        return '0';
    }
    let pos = head.next;
    while(pos) {
        str += pos.val.toString();
        pos = pos.next;
    }
    return str;
}

console.log(largestNumber([8308,8308,830]) === "83088308830");
console.log(largestNumber([10,2]) === "210");
console.log(largestNumber([3,30,34,5,9]) === "9534330"); // === "9534330"
console.log(largestNumber([432,43243]) === "43243432");
console.log(largestNumber([12,121]) === "12121")
// @lc code=end

