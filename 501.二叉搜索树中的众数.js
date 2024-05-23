/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
    const map = new Map();
    const travser = (node) => {
        if (!node) {
            return;
        }
        map[node.val] = (map[node.val] || 0) + 1;
        travser(node.left);
        travser(node.right);
    }
    travser(root);
    let max = 0;
    for (let key in map) {
        max = Math.max(max, map[key]);
    }
    const result = [];
    for (let key in map) {
        if (map[key] === max) {
            result.push(key);
        }
    }
    return result;
};

// bst 左根右 就是从小到大排序
var findMode = function(root) {
    let count = 0;
    let max = 0;
    let base = undefined;
    let result = [];
    const update = (num) => {
        if (num === base) {
            count += 1;
        } else {
            base = num;
            count = 1;
        }

        if (count > max) {
            max = count;
            result = [base];
        } else if (count === max) {
            result.push(base);
        }
    }
    const dfs = (node) => {
        if (!node) {
            return;
        }
        dfs(node.left);
        update(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
}
console.log(findMode({ val: 1, right: { val: 2, left: { val: 2 } } }));
// @lc code=end

