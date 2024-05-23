/*
 * @lc app=leetcode.cn id=979 lang=javascript
 *
 * [979] 在二叉树中分配硬币
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * 递归，跟节点数据 = 左节点 + 右节点
 */
var distributeCoins = function(root) {
    const dfs = (node) => {
        // 空
        if (!node) {
            return { coins: 0, path: 0 };
        }
        let path = 0; // 初始化
        let coins = node.val - 1; // 初始化
        const left = dfs(node.left); // left树
        const right = dfs(node.right); // right树
        // 加起来就行啦～
        path += Math.abs(left.coins) + left.path + Math.abs(right.coins) + right.path;
        coins += left.coins + right.coins;
        return { coins, path };
    };
    return dfs(root).path;
};
console.log(distributeCoins({
    val: 3,
    left: { val: 0 },
    right: { val: 0 }
}) === 2);
console.log(distributeCoins({
    val: 0,
    left: { val: 3 },
    right: { val: 0 }
}) === 3);
console.log(distributeCoins({
    val: 1,
    left: { val: 0 },
    right: { val: 2 }
}) === 2);
console.log(distributeCoins({
    val: 1,
    left: { val: 0, right: { val: 3 } },
    right: { val: 0 }
}) === 4);
// [0,null,2]
console.log(distributeCoins({
    val: 0,
    right: { val: 2 }
}) === 1);
// [3,null,0,0,null,0,null,2]
console.log(distributeCoins({
    val: 3,
    right: { val: 0, left: { val: 0, left: { val: 0, right: { val: 2 } } } }
}) === 4);
// @lc code=end

