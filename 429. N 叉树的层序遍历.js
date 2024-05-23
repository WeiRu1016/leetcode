/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const result = [];
    let queue = [root];
    while(queue.length > 0) {
        const values = [];

        for (let i = 0, l = queue.length; i < l; i++) {
            const first = queue.shift();
            values.push(first.val);
            if (first.children) {
                first.children.forEach((item) => {
                    if (item) {
                        queue.push(item)
                    }
                })
            }
        }
        result.push(values);
    }
    return result;
};