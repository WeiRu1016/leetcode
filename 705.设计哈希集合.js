/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

var MyHashSet = function() {
    this.BASE = 769;
    this.store = Array.from(Array(this.BASE), () => []);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.hash = function(key) {
    return key % this.BASE;
};


/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const addr = this.hash(key);
    const bucket = this.store[addr];

    for (let i of bucket) {
        if (i === key) {
            return;
        }
    }
    bucket.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const addr = this.hash(key);
    const bucket = this.store[addr];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const addr = this.hash(key);
    const bucket = this.store[addr];
    
    for (let i of bucket) {
        if (i === key) {
            return true;
        }
    }
    return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

