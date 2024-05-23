/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function() {
    this.tree = { children: {} };
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.tree;
    for (let i = 0; i < word.length; i++) {
        if (node.children[word[i]] === undefined) {
            node.children[word[i]] = { children: {}, end: false }
        }
        node = node.children[word[i]];
        if (i === word.length - 1) {
            node.end = true;
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.tree;
    for (let i = 0; i < word.length; i++) {
        if (node.children[word[i]] === undefined) {
            return false;
        }
        node = node.children[word[i]];
    }
    return !!node.end;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.tree;
    for (let i = 0; i < prefix.length; i++) {
        if (node.children[prefix[i]] === undefined) {
            return false;
        }
        node = node.children[prefix[i]];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
const examples = [[
    ["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
    [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
]];
examples.forEach(([types, args]) => {
    return types.reduce((prev, type, index) => {
        if (type === 'Trie') {
            return new Trie();
        }
        const result = prev[type].apply(prev, args[index]);
        console.log('result:', result);
        return prev;
    }, null);
});
// @lc code=end

