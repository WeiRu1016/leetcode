/*
 * @lc app=leetcode.cn id=1407 lang=javascript
 *
 * [1282] 用户分组
 */

// @lc code=start
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = {};
    groupSizes.forEach((count, i) => {
        if (!map[count]) {
            map[count] = [];
        }
        // TODO 直接放到一个数组，后面 / count 分组也行
        const index = map[count].findIndex(item => item.length < count);
        if (index === -1) {
            map[count].push([i]);
        } else {
            map[count][index].push(i);
        }
    });
    return Object.values(map).reduce((prev, item) => {
        return [...prev, ...item];
    }, []);
};
console.log(groupThePeople([3,3,3,3,3,1,3]));
console.log(groupThePeople([2,1,3,3,3,2]));
// @lc code=end

