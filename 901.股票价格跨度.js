/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function() {
    this.index = -1;
    this.stack = [[this.index, Number.MAX_VALUE]];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.index++;
    while(price >= this.stack[this.stack.length - 1][1]) {
        this.stack.pop();
    }
    const count = this.index - this.stack[this.stack.length - 1][0];
    this.stack.push([this.index, price]);
    return count;
};
[
    [["StockSpanner", "next", "next", "next", "next", "next", "next", "next"], [[], [100], [80], [60], [70], [60], [75], [85]]],
    // [["StockSpanner","next","next","next","next","next"], [[],[29],[91],[62],[76],[51]]]
].forEach(([kL, vL]) => {
    kL.reduce((prev, k, i) => {
        if (k === "StockSpanner") {
            return new StockSpanner();
        }
        const v = vL[i];
        if (k === 'next') {
            console.log(prev.next.apply(prev, v));
        }
        return prev;
    }, null);
})


/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

