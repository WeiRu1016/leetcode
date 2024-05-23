/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const getBits = (max, count, range) => {
        const arr = [];
        const bfs = (index, path) => {
            if (index > max) {
                return;
            }
            if (path.length === count) {
                const num = path.reduce((acc, item) => acc + item, 0);
                if (num >= range[0] && num <= range[1]) {
                    arr.push(num);
                }
                return;
            }
            path.push(Math.pow(2, index));
            bfs(index + 1, path);
            path.pop();
            bfs(index + 1, path)
        }
        bfs(0, []);
        return arr;
    };
    const result = [];
    for (let h = 0; h <= Math.min(4, turnedOn); h++) {
        const hours = getBits(4, h, [0, 11]);
        const minutes = getBits(6, turnedOn - h, [0, 59]);
        for (let i = 0; i < hours.length; i++) {
            for (let j = 0; j < minutes.length; j++) {
                const hour = hours[i];
                const minute = minutes[j];
                result.push(`${hour}:${minute < 10 ? 0 : ''}${minute}`)
            }
        }
    }
    return result;
};
console.log(readBinaryWatch(2));
// console.log(readBinaryWatch(1));
// console.log(readBinaryWatch(9));
// @lc code=end

