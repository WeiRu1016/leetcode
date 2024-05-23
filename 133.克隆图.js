/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return;
    }
    const readNodes = [];
    const stack = [node];

    readNodes[node.val - 1] = { val: node.val, neighbors: [] };

    while(stack.length) {
        const size = stack.length;
        for (let i = 0; i < size; i++) {
            const item = stack.shift();

            const cloneNode = readNodes[item.val - 1];

            item.neighbors.forEach((neighbor) => {
                if (!neighbor) {
                    return;
                }

                if (!readNodes[neighbor.val - 1]) {
                    readNodes[neighbor.val - 1] = { val: neighbor.val, neighbors: [] };
                    stack.push(neighbor);
                }
                cloneNode.neighbors.push(readNodes[neighbor.val - 1]);
            });

            readNodes[item.val - 1] = cloneNode;
        }
    }

    result = readNodes[node.val - 1];
    return result;
};
// @lc code=end

