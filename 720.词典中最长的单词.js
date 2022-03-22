/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const map = new Map();
    words.forEach((word) => {
        if (word.length === 1) {
            map.set(word, 'fail');
        } else {
            map.set(word, word.slice(0, word.length - 1));
        }
    });
    let result = '';
    words.forEach((word) => {
        if (word.length < result.length) {
            return;
        }
        let temp = word;
        while(temp && temp !== 'fail') {
            temp = map.get(temp);
        }
        if (temp !== 'fail') {
            return;
        }
        if (word.length > result.length) {
            result = word;
        } else if (word.length === result.length) {
            if (word.localeCompare(result) === -1) {
                result = word;
            }
        }
    });
    return result;
};
// console.log(longestWord(["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]));
// console.log(longestWord(["w","wo","wor","worl", "world"]));
// console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));
// @lc code=end

