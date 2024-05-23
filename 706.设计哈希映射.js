/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function() {
    this.BASE = 769;
    this.store = Array.from(Array(this.BASE), () => []);
};

/** 
 * @param {number} key 
 * @return {number}
 */
MyHashMap.prototype.hash = function(key) {
    return key % this.BASE;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const addr = this.hash(key);
    const bucket = this.store[addr];
    for (const ele of bucket) {
        if (ele[0] === key) {
            ele[1] = value;
            return;
        }
    }
    bucket.push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const addr = this.hash(key);
    const bucket = this.store[addr];
    return bucket.find((item) => item[0] === key)?.[1] ?? -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const addr = this.hash(key);
    const bucket = this.store[addr];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

