/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    const dp = Array.from(Array(s1.length), () => Array(s1.length));

    const temp = (start, end) => {
        if (dp[start][end]) {
            return dp[start][end];
        }
        dp[start][end] = [];
        if (end === start) {
            dp[start][end].push(s1[start]);
            return dp[start][end];
        }
        for (let k = start; k < end; k++) {
            const left = temp(start, k);
            const right = temp(k + 1, end);
            for (let i = 0; i < left.length; i++) {
                for (let j = 0; j < right.length; j++) {
                    const x = left[i];
                    const y = right[j];
                    if (s2.includes(x + y) && !dp[start][end].includes(x + y)) {
                        dp[start][end].push(x + y);
                    }
                    if (!dp[start][end].includes(y + x) && s2.includes(y + x)) {
                        dp[start][end].push(y + x);
                    }
                }
            }
        }
        return dp[start][end];
    }

    const result = temp(0, s1.length - 1);
    return result.some(item => item === s2);
};
// console.log(isScramble('great', 'rgeat') === true);
// console.log(isScramble('abcde', 'caebd') === false);
// console.log(isScramble('a', 'a') === true);
// console.log(isScramble("abcdbdacbdac", "bdacabcdbdac") === true);
// console.log(isScramble("ccabcbabcbabbbbcbb", "bbbbabccccbbbabcba") === false);
// console.log(isScramble("xstjzkfpkggnhjzkpfjoguxvkbuopi", "xbouipkvxugojfpkzjhnggkpfkzjts"));
// @lc code=end

