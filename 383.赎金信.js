/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for (let i = 0; i < magazine.length; i++) {
        map[magazine[i]] = (map[magazine[i]] || 0) + 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const chart = ransomNote[i];
        if (!map[chart]) {
            return false;
        }
        map[chart] -= 1;
    }
    return true;
};
console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
// @lc code=end

