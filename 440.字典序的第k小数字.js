/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    const getZeroCount = (num) => {
        let count = 0;
        while(num / 10 >= 1) {
            count += 1;
            num = Math.floor(num / 10);
        }
        return count;
    }
    let zeroCount = getZeroCount(n);
    if (k <= zeroCount) {
        return Math.pow(10, k - 1);
    }

    k = k - zeroCount;
    let temp = Math.pow(10, zeroCount);
    let limit = n;
    while(k > 0) {
        const count = 10 - temp % 10;
        if (k <= count && temp + k - 1 <= limit) {
            return temp + k - 1;
        }

        if (k > count && temp + count - 1 <= limit) {
            k = k - count;
            temp = temp + count - 1;

            let _temp = temp + 1;
            let i = 0;
            while(_temp % 10 === 0) {
                i++;
                _temp = _temp / 10;
            }

            if (k <= i) {
                return _temp * Math.pow(10, k - i);
            }
            k = k - i;
            temp = temp + 1;
        } else {
            k = k - (limit - temp + 1);
            zeroCount -= 1;
            temp = Math.floor(limit / 10) + 1;
            limit = Math.pow(10, zeroCount + 1) - 1;
        }
    }
    return temp;
};
console.log(findKthNumber(1, 1) === 1); // 1
console.log(findKthNumber(13, 2) === 10); // 10
console.log(findKthNumber(13, 13) === 9);
console.log(findKthNumber(2, 2) === 2); // 2
console.log(findKthNumber(10, 3) === 2);
console.log(findKthNumber(100, 90) === 9);
console.log(findKthNumber(10000, 10000) === 9999);
console.log(findKthNumber(1692778, 1545580) === 867519); // 867519
// @lc code=end

