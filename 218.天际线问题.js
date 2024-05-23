/*
 * @lc app=leetcode.cn id=218 lang=javascript
 *
 * [218] 天际线问题
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline1 = function (buildings) {
  let link = {
    value: [buildings[0][0], buildings[0][2]],
    next: {
      value: [buildings[0][1], 0],
      next: null,
    },
  };

  for (let i = 1; i < buildings.length; i++) {
    const [left, right, height] = buildings;
    let pos = link;
    let prev = null;

    while (pos) {
      [left, right].forEach((node) => {
        const [x1, y1] = pos.value;
        if (node > x1) {
          return;
        }
        if (node === x1 && height > y1) {
          if (
            prev &&
            pos.next &&
            prev.value[1] === height &&
            height === pos.next.value[1]
          ) {
            prev.next = pos.next;
            pos = pos.next;
          } else {
            pos.value = [x1, height];
          }
        } else if (node < x1) {
          if (!prev && height === y1) {
            pos.value = [node, y1];
          } else if (!prev && height !== y1) {
            const temp = link;
            link = { value: [node, height], next: temp };
            prev = link;
            pos = link.next;
          } else if (prev && height !== Math.min(prev.value[1], y1)) {
            prev.next = { value: [node, height], next: pos };
            prev = prev.next;
          }
        }
      });

      if (right <= pos.value[0]) {
        break;
      }

      prev = pos;
      pos = pos.next;
    }
  }
  const result = [];
  while (link) {
    result.push(link.value);
    link = link.next;
  }
  return result;
};
var getSkyline = function (buildings) {
  let result = [
    [buildings[0][0], buildings[0][2]],
    [buildings[0][1], 0],
  ];

  for (let i = 1; i < buildings.length; i++) {
    const temp = [];
    const [left, right, height] = buildings[i];
    for (let j = 0; j < result.length; j++) {
        const [nodeX, nodeY] = result[j];
        if (nodeX < left) {
            temp.push([nodeX, nodeY]);
        } else if (nodeX === left) {
            if (temp.length === 0 || nodeY >= height || temp[temp.length - 1][1] !== height) {
                temp.push([nodeX, Math.max(height, nodeY)]);
            }
        } else if (nodeX < right) {
            const prev = temp[temp.length - 1];
            //  线上
            if (prev[0] <= right && prev[0] >= left && prev[1] === height) {
                if (nodeY > height) {
                    temp.push([nodeX, nodeY]);
                }
            } else {
                if (prev[1] < height) {
                    temp.push([left, height]);
                } else if (prev[1] > height) {
                    // 找交叉点
                    if (nodeY <= height) {
                        temp.push([nodeX, height]);
                    }
                }
                if (nodeY > height) {
                    temp.push([nodeX, nodeY]);
                }
            }
        } else if (nodeX === right) {
            const prev = temp[temp.length - 1];
            if (prev[0] < left && prev[1] < height) {
                temp.push([left, height]);
            }
            temp.push([nodeX, nodeY]);
        } else {
            const prev = temp[temp.length - 1];
            // 线上
            if (prev[0] <= right && prev[0] >= left && prev[1] === height) {
                temp.push([right, result[j - 1][1]]);
            } else if (prev[0] < left && prev[1] < height) {
                temp.push([left, height]);
                temp.push([right, prev[1]]);
            }
            temp.push([nodeX, nodeY]);
        }
    }
    const last = temp[temp.length - 1];

    if (left > last[0] && height !== last[1]) {
        temp.push([left, height]);
    }
    if (left === last[0] && height !== last[1]) {
        temp.push([left, height]);
    }

    if (right > last[0]) {
        temp.push([right, 0]);
    }

    if (right === last[0]) {
        temp[temp.length - 1] = [right, 0];
    }
    
    result = temp;
  }

  return result;
};
console.log(getSkyline([[0,2,3],[2,5,3]]));
console.log(
  getSkyline([
    [0, 5, 7],
    [5, 10, 7],
    [5, 10, 12],
    [10, 15, 7],
    [15, 20, 7],
    [15, 20, 12],
    [20, 25, 7],
  ])
); // [[0,7],[5,12],[10,7],[15,12],[20,7],[25,0]]
// console.log(
//   getSkyline([
//     [1, 38, 219],
//     [2, 19, 228],
//     [2, 64, 106],
//     [3, 80, 65],
//     [3, 84, 8],
//     [4, 12, 8],
//     [4, 25, 14],
//     [4, 46, 225],
//     [4, 67, 187],
//     [5, 36, 118],
//     [5, 48, 211],
//     [5, 55, 97],
//     [6, 42, 92],
//     [6, 56, 188],
//     [7, 37, 42],
//     [7, 49, 78],
//     [7, 84, 163],
//     [8, 44, 212],
//     [9, 42, 125],
//     [9, 85, 200],
//     [9, 100, 74],
//     [10, 13, 58],
//     [11, 30, 179],
//     [12, 32, 215],
//     [12, 33, 161],
//     [12, 61, 198],
//     [13, 38, 48],
//     [13, 65, 222],
//     [14, 22, 1],
//     [15, 70, 222],
//     [16, 19, 196],
//     [16, 24, 142],
//     [16, 25, 176],
//     [16, 57, 114],
//     [18, 45, 1],
//     [19, 79, 149],
//     [20, 33, 53],
//     [21, 29, 41],
//     [23, 77, 43],
//     [24, 41, 75],
//     [24, 94, 20],
//     [27, 63, 2],
//     [31, 69, 58],
//     [31, 88, 123],
//     [31, 88, 146],
//     [33, 61, 27],
//     [35, 62, 190],
//     [35, 81, 116],
//     [37, 97, 81],
//     [38, 78, 99],
//     [39, 51, 125],
//     [39, 98, 144],
//     [40, 95, 4],
//     [45, 89, 229],
//     [47, 49, 10],
//     [47, 99, 152],
//     [48, 67, 69],
//     [48, 72, 1],
//     [49, 73, 204],
//     [49, 77, 117],
//     [50, 61, 174],
//     [50, 76, 147],
//     [52, 64, 4],
//     [52, 89, 84],
//     [54, 70, 201],
//     [57, 76, 47],
//     [58, 61, 215],
//     [58, 98, 57],
//     [61, 95, 190],
//     [66, 71, 34],
//     [66, 99, 53],
//     [67, 74, 9],
//     [68, 97, 175],
//     [70, 88, 131],
//     [74, 77, 155],
//     [74, 99, 145],
//     [76, 88, 26],
//     [82, 87, 40],
//     [83, 84, 132],
//     [88, 99, 99],
//   ])
// );
console.log(getSkyline([
    [4,9,10],
    [4,9,15],
    [4,9,12],
    [10,12,10],
    [10,12,8],
]).toString() === ([[4,15],[9,0],[10,10],[12,0]]).toString());
console.log(getSkyline([
    [1,2,1],
    [1,2,2],
    [1,2,3]
]).toString() === ([[1,3],[2,0]]).toString());
console.log(getSkyline([
    [2,9,10],
    [3,7,15],
    [5,12,12],
    [15,20,10],
    [19,24,8]
]).toString() === ([
    [ 2, 10 ],
    [ 3, 15 ],
    [ 7, 12 ],
    [ 12, 0 ],
    [ 15, 10 ],
    [ 20, 8 ],
    [ 24, 0 ]
]).toString());
console.log(getSkyline([
    [0,2,3],
    [2,5,3]
]).toString() === ([[0, 3],[5, 0]]).toString());
console.log(getSkyline([
    [3,7,8],
    [3,8,7],
    [3,9,6],
    [3,10,5],
    [3,11,4],
    [3,12,3],
    [3,13,2],
    [3,14,1]
]).toString() === ([[3,8],[7,7],[8,6],[9,5],[10,4],[11,3],[12,2],[13,1],[14,0]]).toString());
console.log(getSkyline([
    [1,2,1],
    [1,2,2],
    [1,2,3],
    [2,3,1],
    [2,3,2],
    [2,3,3]
]).toString() === ([[1,3],[3,0]]).toString());
// @lc code=end
