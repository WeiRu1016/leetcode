/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
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
    // 前序遍历
    const result = [];
    const traverse = (node) => {
        if (node) {
            result.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    return result.join(',');
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
    // 排序得到中序
    const arr = data.split(',').map((item) => Number(item));

    const revert = (start, end) => {
        if (start >= end) {
            return null;
        }
        const node = { val: arr[start], left: null, right: null };
        let i = start + 1;
        for (; i < end; i++) {
            if (arr[i] > arr[start]) {
                break;
            }
        }
        node.left = revert(start + 1, i);
        node.right = revert(i, end);
        return node;
    }
    return revert(0, arr.length);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
console.log(deserialize(serialize({
    val: 2,
    left: { val: 1 },
    right: { val: 3 }
})))
console.log(deserialize(serialize(null)));
// @lc code=end

