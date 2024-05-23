/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const degs = Array(numCourses).fill(0);

    const map = {};

    prerequisites.forEach(([a, b]) => {
        degs[a] += 1;
        map[b] = map[b] || [];
        map[b].push(a);
    });

    const queue = [];

    let visited = 0;

    for(let i = 0; i < numCourses; i++) {
        if (degs[i] === 0) {
            queue.push(i);
            visited += 1;
        }
    }

    while(queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            (map[node] || []).forEach((dep) => {
                degs[dep] -= 1;
                if (degs[dep] === 0) {
                    queue.push(dep);
                    visited += 1;
                }
            });
        }
    }

    return visited === numCourses;
};
console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]) === true);
console.log(canFinish(4, [[0,1],[3,1],[1,3],[3,2]]) === false);
console.log(canFinish(2, [[1,0]]) === true);
console.log(canFinish(2, [[1,0],[0,1]]) === false);
// @lc code=end

