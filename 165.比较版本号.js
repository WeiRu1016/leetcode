/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const version1List = version1.split('.');
    const version2List = version2.split('.');
    let pos1 = 0;
    let pos2 = 0;
    while(version1List[pos1] || version2List[pos2]) {
        const num1 = +(version1List[pos1] || '0');
        const num2 = +(version2List[pos2] || '0');
        if (num1 < num2) {
            return -1;
        } else if (num1 > num2) {
            return 1;
        }
        pos1 += 1;
        pos2 += 1;
    }
    return 0;
};
console.log(compareVersion('1.01', '1.001') === 0);
console.log(compareVersion('1.0', '1.0.0') === 0);
console.log(compareVersion('0.1', '1.1') === -1);
// @lc code=end

