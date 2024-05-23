/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim1 = function(commands, obstacles) {
    const nextPoint = (form, to) => {
        // y方向移动
        if (form.x === to.x) {
            if (form.y > to.y) {
                let maxY = -Infinity;
                obstacles.forEach(([x, y]) => {
                    if (x === form.x && y >= to.y && y < form.y) {
                        maxY = Math.max(maxY, y);
                    }
                });
                if (isFinite(maxY)) {
                    return maxY + 1;
                }
                return to.y;
            } else {
                let minY = Infinity;
                obstacles.forEach(([x, y]) => {
                    if (x === form.x && y <= to.y && y > form.y) {
                        minY = Math.min(minY, y);
                    }
                });
                if (isFinite(minY)) {
                    return minY - 1;
                }
                return to.y;
            }
        } else {
            if (form.x > to.x) {
                let maxX = -Infinity;
                obstacles.forEach(([x, y]) => {
                    if (y === form.y && x >= to.x && x < form.x) {
                        maxX = Math.max(maxX, x);
                    }
                });
                if (isFinite(maxX)) {
                    return maxX + 1;
                }
                return to.x;
            } else {
                let minX = Infinity;
                obstacles.forEach(([x, y]) => {
                    if (y === form.y && x <= to.x && x > form.x) {
                        minX = Math.min(minX, x);
                    }
                });
                if (isFinite(minX)) {
                    return minX - 1;
                }
                return to.x;
            }
        }
    };
    let max = 0;
    let x = 0;
    let y = 0;
    // 北表示 +Y 方向。
    // 东表示 +X 方向。
    // 南表示 -Y 方向。
    // 西表示 -X 方向。
    const dirList = ['n', 'w', 's', 'e']; // n - 北，s - 南，e - 东，w - 西
    let dirIndex = 0;
    // -2 ：向左转 90 度
    // -1 ：向右转 90 度
    commands.forEach((command) => {
        if (command === -2) {
            dirIndex = (dirIndex + 1) % dirList.length;
            return;
        }
        if (command === -1) {
            dirIndex = (dirList.length + dirIndex - 1) % dirList.length;
            return;
        }
        switch(dirList[dirIndex]) {
            case 'n':
                y = nextPoint({x, y}, {x, y: y + command});
            break;
            case 's':
                y = nextPoint({x, y}, {x, y: y - command});
            break;
            case 'e':
                x = nextPoint({x, y}, {x: x + command, y});
            break;
            case 'w':
                x = nextPoint({x, y}, {x: x - command, y});
            break;
        }
        max = Math.max(max, x * x + y * y);
    });
    return max;
};

var robotSim = function(commands, obstacles) {
    const dirList = [
        [0, 1], // 北
        [-1, 0], // 西
        [0, -1], // 南
        [1, 0], // 东
    ];
    let dirIndex = 0;
    let max = 0;
    let x = 0;
    let y = 0;
    const obstaclesSet = new Set();

    for (const obstacle of obstacles) {
        obstaclesSet.add(`x:${obstacle[0]},y:${obstacle[1]}`);
    }

    for (const command of commands) {
        if (command < 0) {
            dirIndex = (dirIndex + (command === -2 ? 1 : 3)) % dirList.length;
        } else {
            const [x1, y1] = dirList[dirIndex];
            for (let i = 1; i <= command; i++) {
                if (obstaclesSet.has(`x:${x + x1},y:${y + y1}`)) {
                    break;
                }
                x += x1;
                y += y1;
            }
            max = Math.max(max, x * x + y * y);
        }
    }
    return max;
}

console.log(robotSim([4,-1,3], []) === 25);
console.log(robotSim([4,-1,4,-2,4], [[2,4]]) === 65);
console.log(robotSim([6,-1,-1,6], []) === 36);
// @lc code=end

