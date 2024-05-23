/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const stack = [root];
    const res = [];
    while(stack.some((i) => !!i)) {
        for (let i = 0, l = stack.length; i < l; i++) {
            const node = stack.shift();
            if (node) {
                res.push(node.val);
                stack.push(node.left);
                stack.push(node.right);
            } else {
                res.push('null');
            }
        }
    }
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) {
        return null;
    }
    const nums = data.split(',');
    const root = { val: Number(nums[0]), left: null, right: null };
    const stack = [root];
    let index = 0;
    while(stack.length) {
        for (let i = 0, l = stack.length; i < l; i++) {
            const node = stack.shift();
            if (node) {
                const leftIndex = ++index;
                const rightIndex = ++index;
                if (leftIndex < nums.length && nums[leftIndex] != 'null') {
                    node.left = {
                        val: Number(nums[leftIndex]),
                        left: null,
                        right: null,
                    }
                }
                stack.push(node.left);
                if (rightIndex < nums.length && nums[rightIndex] != 'null') {
                    node.right = {
                        val: Number(nums[rightIndex]),
                        left: null,
                        right: null,
                    }
                }
                stack.push(node.right);
            }
        }
    }
    return root;
};

console.log(serialize(deserialize('1,2,3,null,null,4,5')) === '1,2,3,null,null,4,5');
console.log(serialize(deserialize('')) === '');
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

