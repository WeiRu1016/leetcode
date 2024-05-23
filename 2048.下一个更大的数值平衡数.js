/*
 * @lc app=leetcode.cn id=2048 lang=javascript
 *
 * [2048] 下一个更大的数值平衡数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    const process = (nums) => {
        let min = Infinity;
        let sand = 0;
        let list = [{ value: 0, counts: nums.map((num) => ({ num, left: num })) }];
        while(sand < count) {
            const v = Math.pow(10, sand);
            const temp = [];
            for (let j = 0; j < list.length; j++) {
                const { value, counts } = list[j];
                counts.forEach(({ num, left }, idx) => {
                    if (left > 0) {
                        const newCounts = [...counts];
                        newCounts.splice(idx, 1, { num, left: left - 1 });
                        temp.push({ value: value + num * v, counts: newCounts });
                    }
                });
            }
            sand += 1;
            list = temp;
        }
        list.forEach(({ value }) => {
            if (value > n && value < min) {
                min = value;
            }
        });
        return min;
    }

    const count = `${n}`.length;
    // 1种数字的情况
    let num = process([count]);
    // 升位数
    if (!isFinite(num)) {
        return nextBeautifulNumber(Math.pow(10, count));
    }

    // 2种数字的情况
    for (let i = 1; i <= count - 1; i++) {
        for (let j = i + 1; j <= count; j++) {
            if (i + j === count) {
                num = Math.min(num, process([i, j]));
            }
        }
    }

    // 3种数字的情况
    for (let i = 1; i <= count - 2; i++) {
        for (let j = i + 1; j <= count - 1; j++) {
            for (let k = j + 1; k <= count; k++) {
                if (i + j + k === count) {
                    num = Math.min(num, process([i, j, k]));
                }
            }
        }
    }

    return num;
};
// console.log(nextBeautifulNumber(3000));
// console.log(nextBeautifulNumber(3133));
// console.log(nextBeautifulNumber(1000));
// console.log(nextBeautifulNumber(1) === 22); // 22
// console.log(nextBeautifulNumber(10461) === 14444); // 14444
// console.log(nextBeautifulNumber(16407) === 22333); // 22333
// console.log(nextBeautifulNumber(59866) === 122333); // 122333
// @lc code=end

