/*
 * @lc app=leetcode.cn id=1333 lang=javascript
 *
 * [1333] 餐厅过滤器
 */

// @lc code=start
/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    return restaurants.filter(([id, rating, _veganFriendly, price, distance]) => {
        if (veganFriendly && !_veganFriendly) {
            return false;
        }
        if (price > maxPrice) {
            return false;
        }
        if (distance > maxDistance) {
            return false;
        }
        return true;
    }).sort((prev, next) => {
        if (prev[1] === next[1]) {
            return next[0] - prev[0];
        }
        return next[1] - prev[1];
    }).map((item) => item[0]);
};
console.log(filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 0, 50, 10));
// @lc code=end

