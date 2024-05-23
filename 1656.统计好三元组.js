/*
 * @lc app=leetcode.cn id=1775 lang=javascript
 *
 * [1656] 设计有序流
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.list = Array(n).fill(null);
    this.ptr = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    const result = [];
    this.list[idKey - 1] = value;
    if (idKey === this.ptr) {
        result.push(value);
        this.ptr += 1;
        while(this.ptr - 1 < this.list.length && this.list[this.ptr - 1]) {
            result.push(this.list[this.ptr - 1]);
            this.ptr += 1;
        }
    }
    return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
const instance = new OrderedStream(5);
[[3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]].forEach(([k, v]) => {
    console.log(instance.insert(k, v));
});
// @lc code=end

