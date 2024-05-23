/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 */
var findSecondMinimumValue1 = function(root) {
    let result = Infinity;
    const bfs = (node) => {
        if (!node.left || !node.right) {
            return;
        }
        const val = node.val;
        if (val === node.left.val && val === node.right.val && val < result) {
            bfs(node.left);
            bfs(node.right);
        } else if (val === node.left.val && node.right.val < result) {
            result = node.right.val;
            bfs(node.left);
        } else if (val === node.right.val && node.left.val < result) {
            result = node.left.val;
            bfs(node.right);
        }
    }
    bfs(root);
    return Number.isFinite(result) ? result : -1;
};
var findSecondMinimumValue = function(root) {
    let result = -1;
    const dfs = (node) => {
        if (!node) {
            return;
        }

        if (result !== -1 && node.val >= result) {
            return;
        }

        if (node.val > root.val) {
            result = node.val;
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return result;
};
console.log(findSecondMinimumValue({
    val: 1,
    left: {
        val: 1,
        left: {
            val: 1,
            left: {
                val: 3
            },
            right: {
                val: 1,
            },
        },
        right: {
            val: 1,
        }
    },
    right: {
        val: 3,
        left: { val: 3 },
        right: { val: 4 },
    }
}));
// [1,1,3,1,1,3,4,3,1]
console.log(findSecondMinimumValue({
    val: 2,
    left: { val: 2 },
    right: {
        val: 5,
        left: { val: 5 },
        right: { val: 7 },
    }
}));
console.log(findSecondMinimumValue({
    val: 2,
    left: { val: 2 },
    right: {
        val: 2,
    }
}));
// @lc code=end

