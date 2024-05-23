// 给你两个下标从 0 开始的整数数组 player1 和 player2 ，分别表示玩家 1 和玩家 2 击中的瓶数。

// 保龄球比赛由 n 轮组成，每轮的瓶数恰好为 10 。

// 假设玩家在第 i 轮中击中 xi 个瓶子。玩家第 i 轮的价值为：

// 如果玩家在该轮的前两轮的任何一轮中击中了 10 个瓶子，则为 2xi 。
// 否则，为 xi 。
// 玩家的得分是其 n 轮价值的总和。

// 返回

// 如果玩家 1 的得分高于玩家 2 的得分，则为 1 ；
// 如果玩家 2 的得分高于玩家 1 的得分，则为 2 ；
// 如果平局，则为 0 。
 

// 示例 1：

// 输入：player1 = [4,10,7,9], player2 = [6,5,2,3]
// 输出：1
// 解释：player1 的得分是 4 + 10 + 2*7 + 2*9 = 46 。
// player2 的得分是 6 + 5 + 2 + 3 = 16 。
// player1 的得分高于 player2 的得分，所以 play1 在比赛中获胜，答案为 1 。
// 示例 2：

// 输入：player1 = [3,5,7,6], player2 = [8,10,10,2]
// 输出：2
// 解释：player1 的得分是 3 + 5 + 7 + 6 = 21 。
// player2 的得分是 8 + 10 + 2*10 + 2*2 = 42 。
// player2 的得分高于 player1 的得分，所以 play2 在比赛中获胜，答案为 2 。
// 示例 3：

// 输入：player1 = [2,3], player2 = [4,1]
// 输出：0
// 解释：player1 的得分是 2 + 3 = 5 。
// player2 的得分是 4 + 1 = 5 。
// player1 的得分等于 player2 的得分，所以这一场比赛平局，答案为 0 。
 

// 提示：

// n == player1.length == player2.length
// 1 <= n <= 1000
// 0 <= player1[i], player2[i] <= 10
/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let score1 = 0;
    let score2 = 0;

    for(let i = 0; i < player1.length; i++) {
        score1 += player1[i];
        score2 += player2[i];
        if (i === 1) {
            if (player1[i - 1] === 10) {
                score1 += player1[i];
            }
            if (player2[i - 1] === 10) {
                score2 += player2[i];
            }
        } else if (i > 1) {
            if (player1[i - 1] === 10 || player1[i - 2] === 10) {
                score1 += player1[i];
            }
            if (player2[i - 1] === 10 || player2[i - 2] === 10) {
                score2 += player2[i];
            }
        }
    }
    if (score1 > score2) {
        return 1;
    }
    if (score1 === score2) {
        return 0;
    }
    return 2;
};