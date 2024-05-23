/*
 * @lc app=leetcode.cn id=940 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const map = new Map();
    let start = 0;
    let end = 0;
    let result = 0;
    while(end < fruits.length) {
        const fruit = fruits[end];
        if (!map.get(fruit) && map.size === 2) {
            const temp = fruits[start];
            map.set(temp, map.get(temp) - 1);
            if (map.get(temp) === 0) {
                map.delete(temp);
            }
            result = Math.max(result, end - start);
            start += 1;
        } else {
            map.set(fruit, (map.get(fruit) || 0) + 1)
            end += 1;
        }
    }
    return Math.max(result, end - start);
};
console.log(totalFruit([1,2,1]));
console.log(totalFruit([0,1,2,2]));
console.log(totalFruit([1,2,3,2,2]));
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));
// @lc code=end

