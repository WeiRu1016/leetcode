/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    if (num.length < 3) {
        return false;
    }
    // 大数相加
    const sum = (start1Index, start2Index) => {
        let result = '';
        let c = 0;
        let i = start1Index[1] - 1;
        let j = start2Index[1] - 1;
        while(i >= start1Index[0] || j >= start2Index[0]) {
            const num1 = Number(i >= start1Index[0] ? num[i] : 0);
            const num2 = Number(j >= start2Index[0] ? num[j] : 0);
            const total = num1 + num2 + c;
            result = `${total % 10}${result}`;
            c = total > 9 ? 1 : 0;
            i--;
            j--;
        }
        return c > 0 ? `${c}${result}`: result;
    }
    const judge = (start1Index, start2Index) => {
        while(start2Index[1] < num.length) {
            const next = sum(start1Index, start2Index);
            if (num.slice(start2Index[1], start2Index[1] + next.length) !== next) {
                return false;
            }
            start1Index = start2Index;
            start2Index = [start1Index[1], start1Index[1] + next.length];
        }
        return true;
    }

    for (let start1End = 1; start1End + 1 < num.length; start1End++) {
        if (num[start1End] !== '0') {
            for (let start2End = start1End + 1; start2End < num.length; start2End++) {
                if (judge([0, start1End], [start1End, start2End])) {
                    return true;
                }
            }          
        } else {
            if (judge([0, start1End], [start1End, start1End + 1])) {
                return true;
            }
        }
    }
    return false;
};
console.log(isAdditiveNumber('112358') === true);
console.log(isAdditiveNumber('199100199') === true);
console.log(isAdditiveNumber('101') === true);
// @lc code=end

