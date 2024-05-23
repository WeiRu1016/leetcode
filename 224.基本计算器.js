/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const chars = ["+", "-", "(", ")"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var calculate = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (chars.includes(s[i])) {
      stack.push(s[i]);
    } else if (numbers.includes(s[i])) {
      if (!stack.length) {
        stack.push(Number(s[i]));
      } else {
        const top = stack.pop();
        if (chars.includes(top)) {
          stack.push(top);
          stack.push(Number(s[i]));
        } else {
          stack.push(top * 10 + Number(s[i]));
        }
      }
    }
  }
  const temp = [];
  for (let i = 0; i < stack.length; i++) {
    // 直接push
    if (['+', '-', '('].includes(stack[i])) {
        temp.push(stack[i]);
    } else if(stack[i] === ')') {
        // (x)
        let right = temp.pop();
        temp.pop();
        // 往前计算
        while(temp.length) {
            const op = temp.pop();
            if (op === '(') {
                // push 回去和后面的)匹配
                temp.push(op);
                break;
            }

            let left = 0;
            // 处理-x情况
            if (temp.length > 0 && temp[temp.length - 1] !== '(') {
                left = temp.pop();
            }

            right = left + (op === '-' ? -1 * right : right);
        }
        temp.push(right);
    } else if (temp.length > 0 && ['+', '-'].includes(temp[temp.length - 1])) {
        // 开始计算
        const op = temp.pop();
        let left = 0;
        // 处理-x情况
        if (temp.length > 0 && temp[temp.length - 1] !== '(') {
            left = temp.pop();
        }
        temp.push(left + (op === '-' ? -1 * stack[i] : stack[i]));
    } else {
        temp.push(stack[i]);
    }
  }
  return temp.pop();
};
console.log(calculate("1 + 1") === 2);
console.log(calculate(" 2-1 + 2 ") === 3);
console.log(calculate("(1+(4+5+2)-3)+(6+8)") === 23);
console.log(calculate("1-(     -2)") === 3);
console.log(calculate("- (3 + (4 + 5))"));
// @lc code=end
