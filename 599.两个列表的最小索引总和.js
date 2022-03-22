/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let min = Infinity;
    let result = [];
    const map = {};
    list1.forEach((item, index) => {
        map[item] = index;
    });
    list2.forEach((item, index) => {
        if (index <= min && map[item] != undefined) {
            const sum = index + map[item];
           if (sum < min) {
               min = sum;
               result = [item];
           } else if (sum === min) {
               result.push(item);
           }
        }
    });
    return result;
};
// console.log(findRestaurant(
//     ["Shogun","Tapioca Express","Burger King","KFC"],
//     ["KFC","Shogun","Burger King"]
// ));
// console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
// @lc code=end

