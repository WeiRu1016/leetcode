/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks1 = function(score) {
    const sorted = [...score].sort((p, n) => n - p);

    return score.map((v) => {
        const i = sorted.indexOf(v);
        if (i === 0) {
            return 'Gold Medal'
        }
        if (i === 1) {
            return 'Silver Medal'
        }
        if (i === 2) {
            return 'Bronze Medal'
        }
        return `${i + 1}`
    });
};
var findRelativeRanks = function(score) {
    const values = score.map((v, i) => ({ value: v, index: i }));

    const sorted = values.sort((p, n) => n.value - p.value);

    const result = [];

    sorted.forEach(({ index }, i) => {
        let order = `${i + 1}`;
        if (i === 0) {
            order = 'Gold Medal';
        } else if (i === 1) {
            order = 'Silver Medal'
        } else if (i === 2) {
            order = 'Bronze Medal'
        }
        result[index] = order;
    });

    return result;
};

// @lc code=end

