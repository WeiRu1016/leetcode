/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees1 = function(n, edges) {
    if (n <= 2) {
        return Array.from(Array(n), (v, i) => { return i });
    }

    const arr = Array.from(Array(n), () => { return [] });
    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        arr[a].push(b);
        arr[b].push(a);
    }

    const bfs = (node, parent, level) => {
        const children = arr[node];
        let max = level;
        for (let i = 0; i < children.length; i++) {
            if (children[i] !== parent) {
                max = Math.max(bfs(children[i], node, level + 1), max);
            }
        }
        return max;
    }

    let result = [];
    let min = Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i].length <= 1) {
            continue
        }
        const height = bfs(i, undefined, 0);
        if (height < min) {
            min = height;
            result = [i];
        } else if (height === min) {
            result.push(i);
        }
    }

    return result;
};
var findMinHeightTrees = function(n, edges) {
    const adj = Array.from(Array(n), () => []);
    edges.forEach(([start, end]) => {
        adj[start].push(end);
        adj[end].push(start);
    });

    // 广度优先遍历一个树
    const bfs = (root, parent) => {
        const visit = new Set();
        const nodes = [root];
        visit.add(root);
        let result = -1;
        while(nodes.length > 0) {
            const node = nodes.shift();
            result = node;
            adj[node].forEach((child) => {
                if (!visit.has(child)) {
                    visit.add(child);
                    parent[child] = node;
                    nodes.push(child);
                }
            });
        }
        return result;
    }
    const x = bfs(0, []);
    const parent = [];
    let y = bfs(x, parent);
    const path = [];
    parent[x] = -1;
    while(y !== -1) {
        path.push(y);
        y = parent[y];
    }
    const result = [];
    if (path.length % 2 === 0) {
        result.push(path[(path.length) / 2]);
    }
    result.push(path[Math.floor((path.length - 1) / 2)]);
    return result;
};

console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]]));
console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]));
// @lc code=end

