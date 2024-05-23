/*
 * @lc app=leetcode.cn id=991 lang=javascript
 *
 * [954] 二倍数对数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    let pos = -1;
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        for (let j = pos + 1; j < i; j++) {
            if (2 * num === arr[j] || num === 2 * arr[j]) {
                if (j === pos + 1 || j === pos + 2) {
                    const index = j === pos + 1 ? pos + 2 : pos + 1;
                    const temp = arr[index];
                    arr[index] = num
                    arr[i] = temp
                } else {
                    let temp = arr[pos + 1]
                    arr[pos + 1] = num
                    arr[i] = temp

                    temp = arr[pos + 2]
                    arr[pos + 2] = arr[j]
                    arr[j] = temp
                }

                pos += 2
                break
            }
        }
    }
    return pos === arr.length - 1;
};
console.log(canReorderDoubled([2,4,0,0,8,1]));
// console.log(canReorderDoubled([3,1,3,6]));
// console.log(canReorderDoubled([2,1,2,6]));
// console.log(canReorderDoubled([4,-2,2,-4]));
// @lc code=end

