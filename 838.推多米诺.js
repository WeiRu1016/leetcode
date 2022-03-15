/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    dominoes = dominoes.split('');
    let i = 0;
    while(i < dominoes.length) {
        if (dominoes[i] === 'R') {
            let j = i + 1;
            while(dominoes[j] === '.') {
                j++
            }
            if (dominoes[j] === 'L') {
                let start = i + 1;
                let end = j - 1;
                while(start < end) {
                    dominoes[start++] = 'R';
                    dominoes[end--] = 'L';
                }
                if (start === end) {
                    dominoes[start] = '.';
                }
                i = j + 1;
            } else {
                while(i < j) {
                    dominoes[i++] = 'R';
                }
            }
        } else if (dominoes[i] === 'L') {
            let j = i - 1;
            while(dominoes[j] === '.') {
                dominoes[j] = 'L';
                j--;
            }
            i++;
        } else {
            i++;
        }
    }
    return dominoes.join('');
};
console.log(pushDominoes('RR.L') === 'RR.L');
console.log(pushDominoes('.L.R...LR..L..') === 'LL.RR.LLRRLL..'); // LL.RR.LLRRLL..
console.log(pushDominoes("..R..") === "..RRR"); // "..RRR"
// @lc code=end

