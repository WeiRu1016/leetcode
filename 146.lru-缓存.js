/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.reset = capacity;
    // 双向链表 头
    this.head = { next: null };
    // 双向链表 尾
    this.tail = this.head;
    // 记录key 对应的节点
    this.map = {};
};

LRUCache.prototype.removeHeadNode = function() {
    const node = this.head.next;

    // 删除唯一的节点
    if (this.tail === node) {
        this.head.next = null;
        this.tail = this.head;
    } else {
        this.head.next = this.head.next.next;
    }

    if (node.next) {
        node.next.prev = this.head;
    }

    return node;
};

LRUCache.prototype.moveToTail = function(node) {
    // 已经在最后了，不需要调整到最后
    if (this.tail === node) {
        return;
    }

    node.prev.next = node.next;
    if (node.next) {
        node.next.prev = node.prev;
    }

    this.insertToTail(node);
};

LRUCache.prototype.insertToTail = function(node) {
    node.prev = this.tail;
    this.tail.next = node;
    node.next = null;
    this.tail = node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.map) {
        this.moveToTail(this.map[key]);
        return this.map[key].value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (key in this.map) {
        this.map[key].value = value;
        this.moveToTail(this.map[key]);
        return;
    }

    if (this.reset <= 0 && this.head.next) {
        const node = this.removeHeadNode();
        delete this.map[node.key];
        this.reset += 1;
    }

    // 插入新节点
    const node = {
        key,
        value,
        prev: this.tail, // 前一个节点
        next: null // 后一个节点
    };
    this.insertToTail(node);

    // 记录一下位置
    this.map[key] = node;
    this.reset -= 1;
    return;
};

const list = [
    [
        ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
    ],
    [
        ["LRUCache","put","get"],
        [[1],[2,1],[2]]
    ],
    [
        ["LRUCache","put","get","put","get","get"],
        [[1],[2,1],[2],[3,2],[2],[3]]
    ],
    [
        ["LRUCache","put","put","put","put","get","get"],
        [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
    ],
    [
        ["LRUCache","put","put","get","put","put","get"],
        [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]
    ],
    [
        ["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"],
        [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]
    ],
    [
        ["LRUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"],
        [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
    ],
];

list.forEach((example, i) => {
    console.group(i);
    example[0].reduce((prev, item, index) => {
        if (item === 'LRUCache') {
            return new LRUCache(example[1][index][0]);
        }
        const res = prev[item].apply(prev, example[1][index]);
        console.log('res:', res);
        return prev;
    }, null);
    console.groupEnd(i);
});

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

