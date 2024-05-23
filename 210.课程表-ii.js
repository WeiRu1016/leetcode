/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const degs = Array(numCourses).fill(0);
    const edges = {};

    prerequisites.forEach(([a, b]) => {
        degs[a] += 1;
        edges[b] = edges[b] || [];
        edges[b].push(a);
    });

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (degs[i] === 0) {
            queue.push(i);
        }
    }

    const result = [];
    while(queue.length) {
        for (let i = 0, l = queue.length; i < l; i++) {
            const node = queue.shift();
            result.push(node);
            (edges[node] || []).forEach((dep) => {
                degs[dep] -= 1;
                if (degs[dep] === 0) {
                    queue.push(dep);
                }
            })
        }
    }

    return result.length === numCourses ? result : [];
};
console.log(findOrder(2, [[1, 0]]));
// console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
// console.log(findOrder(1, []));
// @lc code=end

