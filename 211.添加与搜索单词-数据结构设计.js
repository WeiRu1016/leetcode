/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

var WordDictionary = function() {
    this.dictionary = { children: {} };
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.dictionary;
    for (let i = 0; i < word.length; i++) {
        node.children[word[i]] = node.children[word[i]] || { children: {} };
        node = node.children[word[i]];
        if (i === word.length - 1) {
            node.isEnd = true;
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const bfs = (item, index) => {
        if (!item) {
            return false;
        }
        if (index >= word.length) {
            return !!item.isEnd;
        }
        if (word[index] === '.') {
            for (let node in item.children) {
                if (bfs(item.children[node], index + 1)) {
                    return true;
                }
            }
            return false;
        }
        return bfs(item.children[word[index]], index + 1);
    };

    return bfs(this.dictionary, 0);
};
const examples = [
    // [
    //     ["WordDictionary","addWord","addWord","addWord","search","search","search","search"],
    //     [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
    // ],
    // [
    //     ["WordDictionary","search"],
    //     [[],["a"]]
    // ],
    // [
    //     ["WordDictionary","addWord","addWord","search","search","search","search","search","search"],
    //     [[],["a"],["a"],["."],["a"],["aa"],["a"],[".a"],["a."]]
    // ],
    [
        ["WordDictionary","addWord","addWord","addWord","addWord","search","search","addWord","search","search","search","search","search","search"],
        [[],["at"],["and"],["an"],["add"],["a"],[".at"],["bat"],[".at"],["an."],["a.d."],["b."],["a.d"],["."]]
    ]
];
examples.forEach(([types, args]) => {
    return types.reduce((prev, type, index) => {
        if (type === 'WordDictionary') {
            return new WordDictionary();
        }
        const result = prev[type].apply(prev, args[index]);
        console.log('result:', result);
        return prev;
    }, null);
});
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

