/*
 * @lc app=leetcode.cn id=826 lang=javascript
 *
 * [826] 安排工作以达到最大收益
 */

// @lc code=start
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  // 困难程度 从小到大
  const sorted = Array.from(Array(difficulty.length), (_, i) => i).sort(
    (p, n) => difficulty[p] - difficulty[n]
  );

  worker.sort((p, n) => p - n);

  let j = 0;
  let money = 0;
  let sum = 0;
  for (const man of worker) {
    while (j < sorted.length && man >= difficulty[sorted[j]]) {
      money = Math.max(money, profit[sorted[j]]);
      j++;
    }
    sum += money;
  }

  return sum;
};
// var maxProfitAssignment = function(difficulty, profit, worker) {
//     let n = difficulty.length;
//     let idx = new Array(n);
//     for (let i = 0; i < n; i++) {
//         idx[i] = i;
//     }
//     idx.sort((a, b) => {
//         return difficulty[a] - difficulty[b];
//     });
//     worker.sort((a, b) => {
//         return a - b;
//     });

//     let res = 0;
//     let j = 0;
//     let mx = 0;
//     for (let x of worker) {
//         while (j < n && difficulty[idx[j]] <= x) {
//             mx = Math.max(mx, profit[idx[j]]);
//             j++;
//         }
//         res += mx;
//     }
//     return res;
// };
console.log(
  maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
);
console.log(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25]));
// @lc code=end
