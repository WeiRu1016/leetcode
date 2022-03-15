/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea1 = function(heights) {
    let max = heights[0];
    for (let i = 1; i < heights.length; i++) {
        let min = heights[i];
        for (let j = i; j >= 0; j--) {
            min = Math.min(heights[j], min);
            const temp = min * (i - j + 1);
            max = Math.max(max, temp);
        }
    }
    return max;
};

var largestRectangleArea2 = function(heights) {
    const minIndexs = [0];
    let minIndex = 0;
    for (let i = 1; i < heights.length; i++) {
        const min = heights[minIndex];
        if (heights[i] <= min) {
            minIndex = i;
        }
        minIndexs[i] = minIndex;
    }
    let max = heights[0];
    for (let i = 1; i < heights.length; i++) {
        let min = heights[i];
        for (let j = i; j >= minIndexs[i]; j--) {
            if (heights[j] < min) {
                max = Math.max(max, min * (i - j), heights[j] * (i - j + 1));
                min = heights[j];
            }
        }
        max = Math.max(max, heights[minIndexs[i]] * (i + 1));
    }
    return max;
};

var largestRectangleArea = function(heights) {
    const stack = [-1, 0];
    let max = heights[0];
    for (let i = 1; i < heights.length; i++) {
        // 单调栈
        while(stack.length > 1 && heights[i] <= heights[stack[stack.length - 1]]) {
            const top = stack.pop();
            max = Math.max(max, (i - stack[stack.length - 1] - 1) * heights[top]);
        }
        stack.push(i);
    }

    while(stack.length > 1) {
        const top = stack.pop();
        max = Math.max(max, (heights.length - stack[stack.length - 1] - 1) * heights[top]);
    }

    return max;
}


console.log(largestRectangleArea([2,1,2]) === 3);
console.log(largestRectangleArea([1,1]) === 2);
console.log(largestRectangleArea([0,9]) === 9); // 9
console.log(largestRectangleArea([1,2,3,4,5]) === 9); // 9
console.log(largestRectangleArea([2,1,5,6,2,3]) === 10); // 10
console.log(largestRectangleArea([2, 4]) === 4); // 4
// @lc code=end

