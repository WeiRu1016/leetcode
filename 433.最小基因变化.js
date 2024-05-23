/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const diffOne = (str1, str2) => {
    let flag = false;
    for (let j = 0; j < str1.length; j++) {
        if (str1[j] !== str2[j]) {
            if (flag) {
                return false;
            }
            flag = true;
        }
    }
    return true;
}
var minMutation = function(start, end, bank) {
    let count = Infinity;
    const fn = (before, after, path) => {
        if (before === after) {
            count = Math.min(count, path.length);
            return;
        }
        for (let i = 0; i < bank.length; i++) {
            if (!path.includes(bank[i]) && diffOne(before, bank[i])) {
                path.push(bank[i]);
                fn(bank[i], after, path);
                path.pop();
            }
        }
    };
    fn(start, end, []);
    return count === Infinity ? -1 : count;
};
console.log(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']));
console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA","AACCGCTA","AAACGGTA"]));
console.log(minMutation('AAAAACCC', 'AACCCCCC', ["AAAACCCC","AAACCCCC","AACCCCCC"]));
console.log(minMutation("AACCGGTT", "AACCGGTA", []));
console.log(minMutation('AACCGGTT', 'AACCGGTT', []));
// @lc code=end

