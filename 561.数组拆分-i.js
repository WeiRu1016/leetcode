
// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。

// 返回该 最大总和 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // 从下到大排序
    const sorted = [...nums].sort((p, n) => p - n);
    let sum = 0;
    for (let i = 0; i < sorted.length; i += 2) {
        sum += sorted[i];
    }
    return sum;
};
