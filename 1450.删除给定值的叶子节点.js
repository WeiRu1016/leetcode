/*
 * @lc app=leetcode.cn id=1560 lang=javascript
 *
 * [1450] 在既定时间做作业的学生人数
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        const start = startTime[i];
        const end = endTime[i];
        if (queryTime >= start && queryTime <= end) {
            count += 1
        }
    }
    return count;
};
console.log(busyStudent([1,2,3], [3,2,7], 4) === 1);
console.log(busyStudent([4], [4], 4) === 1);
console.log(busyStudent([4], [4], 5) === 0);
console.log(busyStudent([1,1,1,1], [1,3,2,4], 7) === 0);
console.log(busyStudent([9,8,7,6,5,4,3,2,1], [10,10,10,10,10,10,10,10,10], 5) === 5);
// @lc code=end

