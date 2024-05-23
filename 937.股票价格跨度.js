/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    return logs.sort((prev, next) => {
        const arr1 = prev.split(' ');
        const arr2 = next.split(' ');

        const prevIsNum = /\d+/.test(arr1[1]);
        const nextIsNum = /\d+/.test(arr2[1]);

        if (prevIsNum && nextIsNum) {
            return 0;
        }

        if (prevIsNum) {
            return 1;
        }

        if (nextIsNum) {
            return -1;
        }

        for (let i = 1, l = Math.max(arr1.length, arr2.length); i < l; i++) {
            if (i >= arr1.length) {
                return -1;
            }
            if (i >= arr2.length) {
                return 1;
            }
            if (arr1[i] !== arr2[i]) {
                return arr1[i].localeCompare(arr2[i]);
            }
        }

        return arr1[0].localeCompare(arr2[0]);
    });
};
// console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));
// console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));
// console.log(reorderLogFiles(["7 96", "d 0 5", "r 439", "1 bw", "6 dkf"]));
// @lc code=end

