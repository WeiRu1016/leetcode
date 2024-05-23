/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences1 = function(s) {
    const result = [];
    const map = {};

    for (let i = 0; i <= s.length - 10; i++) {
        const str = s.slice(i, i + 10);
        map[str] = (map[str] || 0) + 1;
        if (map[str] === 2) {
            result.push(str);
        }
    }
    return result;
};
// 可以使用位运算优化上面的解法
// AGCT => 0，1，2，3
// 10个字符 => 20位2进制数字
var findRepeatedDnaSequences = function(s) {
    const chartMap = {
        A: 0,
        C: 1,
        G: 2,
        T: 3
    };
    const result = [];
    const map = {};
    let num = 0; // 初始数
    for (let i = 0; i < 9; i++) {
        num = (num << 2) | chartMap[s[i]];
    }

    for (let i = 0; i <= s.length - 10; i++) {
        num = ((num << 2) | chartMap[s[i + 9]]) & ((1 << 20) - 1);
        map[num] = (map[num] | 0) + 1;
        if (map[num] === 2) {
            result.push(s.slice(i, i + 10));
        }
    }
    return result;
}

console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
// @lc code=end

