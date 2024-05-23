/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

var MedianFinder = function() {
    this.list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let start = 0;
    let end = this.list.length - 1;
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (num > this.list[mid]) {
            start = mid + 1;
        } else if (num < this.list[mid]) {
            end = mid - 1;
        } else {
            this.list.splice(mid, 0, num);
            return;
        }
    }
    this.list.splice(start, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const size = this.list.length;
    if (size % 2) {
        return this.list[(size - 1) / 2];
    }
    return (this.list[size / 2] + this.list[size / 2 - 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

const run = (ops, args) => {
    return ops.reduce((prev, op, index) => {
        const arg = args[index];
        if (op === "MedianFinder") {
            return new MedianFinder();
        }
        console.log('return:', prev[op].apply(prev, arg));
        return prev;
    }, null)
}
console.log(run(["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],
[[], [1], [2], [], [3], []]));

