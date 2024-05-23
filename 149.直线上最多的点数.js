/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * 2点确定一条直线
 * 第3个点来的时候，如果跟现有的直线符合，那就合并起来，否则跟所有点 重新构成1条直线
 */
var maxPoints = function(points) {
    if (points.length <= 1) {
        return points.length;
    }
    const isSameLine = (line, index) => {
        const p1 = points[line[0]];
        const p2 = points[line[1]];
        const point = points[index];

        if (p1[0] - p2[0] === 0) {
            return p1[0] - point[0] === 0;
        }
        if (p1[1] - p2[1] === 0) {
            return p1[1] - point[1] === 0;
        }
        return (p1[0] - p2[0]) / (p1[1] - p2[1]) === (p1[0] - point[0]) / (p1[1] - point[1]);;
    }
    let max = 2;
    const lines = [[0, 1]];
    for (let i = 2; i < points.length; i++) {
        let exclude = [];
        lines.forEach((line) => {
            if (isSameLine(line, i)) {
                line.push(i);
                max = Math.max(max, line.length);
                exclude = [...exclude, ...line];
            }
        });
        for (let k = 0; k < i; k++) {
            if (!exclude.includes(k)) {
                lines.push([k, i]);
            }
        }
    }
    return max;
};
// console.log(maxPoints([[1,1],[2,2],[3,3]]));
// console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));
// console.log(maxPoints([[2,3],[3,3],[-5,3]]));
console.log(maxPoints([[-424,-512],[-4,-47],[0,-23],[-7,-65],[7,138],[0,27],[-5,-90],[-106,-146],[-420,-158],[-7,-128],[0,16],[-6,9],[-34,26],[-9,-166],[-570,-69],[-665,-85],[560,248],[1,-17],[630,277],[1,-7],[-287,-222],[30,250],[5,5],[-475,-53],[950,187],[7,-6],[-700,-274],[3,62],[-318,-390],[7,19],[-285,-21],[-5,4],[53,37],[-5,-1],[-2,-33],[-95,11],[4,1],[8,25],[700,306],[1,24],[-2,-6],[-35,-387],[-630,-245],[-328,-260],[-350,-129],[35,299],[-380,-37],[-9,-9],[210,103],[7,-5],[-3,-52],[-51,23],[-8,-147],[-371,-451],[-1,-14],[-41,6],[-246,-184],[350,161],[-212,-268],[-140,-42],[-9,-4],[-7,5],[10,6],[-15,-191],[-7,-4],[318,342],[-8,-71],[-68,20],[6,119],[6,13],[-280,-100],[140,74],[-760,-101],[0,-24],[-70,-13],[0,2],[0,-9],[106,98]]));
// @lc code=end

