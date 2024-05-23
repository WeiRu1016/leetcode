/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const result = Array(n).fill(0);
    const stack = [];
    let prevTimestamp = 0;
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        const matches = log.match(/(\d+)\:(start|end)\:(\d+)/);
        const id = matches[1];
        const flag = matches[2];
        const timestamp = Number(matches[3]) + (flag === 'end' ? 1 : 0);

        if (stack.length) {
            const currentId = stack[stack.length - 1];
            if (currentId === id) {
                result[currentId] += timestamp - prevTimestamp;
                if (flag === 'end') {
                    stack.pop();
                }
            } else {
                result[currentId] += timestamp - prevTimestamp;
            }
        }
        if (flag === 'start') {
            stack.push(id);
        }
        prevTimestamp = timestamp;
    }
    return result;
};
console.log(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"]));
console.log(exclusiveTime(1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]));
console.log(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]));
console.log(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:7","1:end:7","0:end:8"]));
console.log(exclusiveTime(1, ["0:start:0","0:end:0"]))
// @lc code=end

