/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */

var addOperators = function (num, target) {
  const result = [];
  const bfs = (index, exp, res, mul) => {
    if (index >= num.length) {
      if (res === target) {
        result.push(exp.join(''));
      }
      return;
    }

    const opIndex = exp.length;
    if (index > 0) {
        exp.push(' ');
    }
    let right = 0
    for (let j = index; j < num.length; j++) {
        // 100情况
        if (j > index && num[index] === '0') {
            break;
        }
        exp.push(num[j]);
        right = right * 10 + Number(num[j]);
        // 第一个只能加数字
        if (index === 0) {
            bfs(j + 1, exp, right, right);
        } else {
            // 加号
            exp[opIndex] = '+';
            bfs(j + 1, exp, res + right, right);
            // 减号
            exp[opIndex] = '-';
            bfs(j + 1, exp, res - right, -right);
            // 乘法
            exp[opIndex] = '*';
            bfs(j + 1, exp, res - mul + mul * right, mul * right);
        }
    }
    exp.splice(opIndex, exp.length - opIndex);
  };

  bfs(0, [], 0, 0);
  return result;
};
console.log(addOperators('123', 6));
console.log(addOperators('232', 8));
console.log(addOperators('3456237490', 9191));
console.log(addOperators("105", 5));
console.log(addOperators("00", 0));
// console.log(addOperators("123456789", 45));
// [
//   "1*2*3*4*5-6+78-9",
//   "1*2*3*4+5+6-7-8+9",
//   "1*2*3-4*5-6*7+8+9",
//   "1*2*3-4*5+6-7*8+9",
//   "1*2*3-4*5+6+7-8*9",
//   "1*2*3-45-67+8+9",
//   "1*2*3+4-5*6-7*8+9",
//   "1*2*3+4-5*6+7-8*9",
//   "1*2*3+4+5-6*7-8*9",
//   "1*2*3+4+5+6+7+8+9",
//   "1*2*34-5-6-7+8+9",
//   "1*2*34+56-7+8*9",
//   "1*2-3*4-5+67-8+9",
//   "1*2-3-4-5+6*7-89",
//   "1*2-3+4*5-67+8-9",
//   "1*2-3+4-56-7+8-9",
//   "1*2-34-5*6+7*8-9",
//   "1*2+3*4-56-78+9",
//   "1*2+3-45-6+7+8*9",
//   "1*2+3+4-5-6*7+8-9",
//   "1*2+3+4-5+6-7*8-9",
//   "1*2+3+4+5*6+7+8-9",
//   "1*2+3+45+67-8*9",
//   "1*2+34-5-6+7-8-9",
//   "1*2+34-56-7*8+9",
//   "1*2+34-56+7-8*9",
//   "1*2+34+5-6+7-8+9",
//   "1*2+34+56-7*8-9",
//   "1*23-4+56+7-89",
//   "1*23+4*5-6-7-8-9",
//   "1-2*3*4-5-6-78-9",
//   "1-2*3*4+5+6-7+8*9",
//   "1-2*3-4*5-6*7-8*9",
//   "1-2*3-4*5+6+7+8+9",
//   "1-2*3-4+5-6-7*8-9",
//   "1-2*3-4+5+6*7+8-9",
//   "1-2*3-4+56+7-8+9",
//   "1-2*3-45-67-8*9",
//   "1-2*3+4-5*6+7+8+9",
//   "1-2*3+4+5-6*7+8+9",
//   "1-2*3+4+5+6-7*8+9",
//   "1-2*3+4+5+6+7-8*9",
//   "1-2*34-5*6-7-89",
//   "1-2-3*4*5-6+7-8-9",
//   "1-2-3-4*5+6-78-9",
//   "1-2-3-45-6-7-89",
//   "1-2-3+4-5*6-78-9",
//   "1-2-3+45+6-7-8-9",
//   "1-2+3*4-5+6+7*8-9",
//   "1-2+3*4+5+6-78-9",
//   "1-2+3-4-5-67-8+9",
//   "1-2+3-45-6+7-8+9",
//   "1-2+34-5+6+78-9",
//   "1-2+34-56+7+8+9",
//   "1-2+34+5-6+7+8*9",
//   "1-23*4-5+6*7+89",
//   "1-23-4*5-6*7-89",
//   "1-23-4-5-67-8-9",
//   "1-23-45-67-89",
//   "1-23+4-5+67+8-9",
//   "1-23+4+5+6+7-89",
//   "1+2*3*4*5+6+7-89",
//   "1+2*3*4-5-6*7-8+9",
//   "1+2*3*4+5*6+7-8+9",
//   "1+2*3-4+5+6*7-89",
//   "1+2*3+4*5*6+7-89",
//   "1+2*3+4*5-6-7+8+9",
//   "1+2*34-5*6-7+8-9",
//   "1+2-3*4*5-6+7+89",
//   "1+2-3*4-5*6+7+8+9",
//   "1+2-3*4+5-6*7+8+9",
//   "1+2-3*4+5+6-7*8+9",
//   "1+2-3*4+5+6+7-8*9",
//   "1+2-3-4*5+6*7-8+9",
//   "1+2-3-45-6-7+8-9",
//   "1+2-3-45+6-7+8-9",
//   "1+2-3+4+5*6-7+8*9",
//   "1+2-3+45+6-7+89",
//   "1+2-34-5+6-7-8*9",
//   "1+2-34-5+6+7*8+9",
//   "1+2-34+5+6-78+9",
//   "1+2+3*4*5+6-7+8+9",
//   "1+2+3*4+5+6*7-8+9",
//   "1+2+3*45-6+78+9",
//   "1+2+3-4*5-6*7+8+9",
//   "1+2+3-4*5+6-7*8+9",
//   "1+2+3-4*5+6+7-8*9",
//   "1+2+3-45-67+8+9",
//   "1+2+3+4-5*6-7*8+9",
//   "1+2+3+4-5*6+7-8*9",
//   "1+2+3+4+5-6*7-8*9",
//   "1+2+3+4+5+6+7+8+9",
//   "1+23*4-5+6*7-8-9",
//   "1+23*4-56-7-8-9",
//   "1+23*4+5-6+7*8-9",
//   "1+23-4*5-6*7+8-9",
//   "1+23-4*5+6-7*8-9",
//   "1+23-4+5-6+7+8+9",
//   "1+23-4+5+6*7-8*9",
//   "1+23-45-67+8-9",
//   "1+23+4-5*6-7*8-9",
//   "1+23+4-5+67-89",
//   "1+23+4+5+6+7+8-9",
//   "12*3*4-5*6+78-9",
//   "12*3-4+5+6-7+8+9",
//   "12*3-4+56-78-9",
//   "12*3+4+5-6-7+8-9",
//   "12*3+4+5+6-7+8-9",
//   "12-3*4*5-6+78+9",
//   "12-3*4+5-67-8+9",
//   "12-3-4*5+6-7-8+9",
//   "12-3-4+56-7+8+9",
//   "12-3+4-5*6-7-8+9",
//   "12-3+4+56-7+89",
//   "12-3+45+6-78+9",
//   "12+3*4+5+6-7-8+9",
//   "12+3*45-6+7+89",
//   "12+3-4*5-67-8+9",
//   "12+3-45-6+78-9",
//   "12+3+4-56+7-89",
//   "12+34-5+6+7-8+9",
// ][
//   ("1*2*3*4*5-6-78+9",
//   "1*2*3*4+5+6-7+8+9",
//   "1*2*3+4+5+6+7+8+9",
//   "1*2*3+4+5-6*7+8*9",
//   "1*2*3+4-5*6+7*8+9",
//   "1*2*3+4-5*6-7+8*9",
//   "1*2*3-4*5+6*7+8+9",
//   "1*2*3-4*5-6+7*8+9",
//   "1*2*3-4*5-6-7+8*9",
//   "1*2*3-45+67+8+9",
//   "1*2*34+56-7-8*9",
//   "1*2*34-5+6-7-8-9",
//   "1*2+3*4-56+78+9",
//   "1*2+3+4+5*6+7+8-9",
//   "1*2+3+4-5+6*7+8-9",
//   "1*2+3+4-5-6+7*8-9",
//   "1*2+3+45+67-8*9",
//   "1*2+3-45+6+7+8*9",
//   "1*2+34+5-6-7+8+9",
//   "1*2+34+56-7*8+9",
//   "1*2+34-5+6+7-8+9",
//   "1*2+34-56+7*8+9",
//   "1*2+34-56-7+8*9",
//   "1*2-3*4+5+67-8-9",
//   "1*2-3+4-5-6*7+89",
//   "1*2-3-4*5+67+8-9",
//   "1*2-3-4+56-7-8+9",
//   "1*2-34+5*6+7*8-9",
//   "1*23+4*5-6+7-8+9",
//   "1*23-4-56-7+89",
//   "1+2*3*4*5+6+7-89",
//   "1+2*3*4+5*6+7-8-9",
//   "1+2*3*4-5+6*7-8-9",
//   "1+2*3+4*5*6+7-89",
//   "1+2*3+4*5-6+7+8+9",
//   "1+2*3-4-5-6*7+89",
//   "1+2*34-5*6+7+8-9",
//   "1+2+3*4*5+6-7-8-9",
//   "1+2+3*4+5+6*7-8-9",
//   "1+2+3*45-6-78-9",
//   "1+2+3+4+5+6+7+8+9",
//   "1+2+3+4+5-6*7+8*9",
//   "1+2+3+4-5*6+7*8+9",
//   "1+2+3+4-5*6-7+8*9",
//   "1+2+3-4*5+6*7+8+9",
//   "1+2+3-4*5-6+7*8+9",
//   "1+2+3-4*5-6-7+8*9",
//   "1+2+3-45+67+8+9",
//   "1+2-3*4*5+6+7+89",
//   "1+2-3*4+5*6+7+8+9",
//   "1+2-3*4-5+6*7+8+9",
//   "1+2-3*4-5-6+7*8+9",
//   "1+2-3*4-5-6-7+8*9",
//   "1+2-3+4*5+6*7-8-9",
//   "1+2-3+45+6-7-8+9",
//   "1+2-3+45-6+7+8-9",
//   "1+2-3-4-5*6+7+8*9",
//   "1+2-3-45-6+7+89",
//   "1+2-34+5+6+7*8+9",
//   "1+2-34+5+6-7+8*9",
//   "1+2-34-5-6+78+9",
//   "1+23*4+5-6-7*8+9",
//   "1+23*4-5-6*7+8-9",
//   "1+23*4-56+7-8+9",
//   "1+23+4+5+6+7+8-9",
//   "1+23+4-5*6+7*8-9",
//   "1+23+4-5-67+89",
//   "1+23-4*5+6*7+8-9",
//   "1+23-4*5-6+7*8-9",
//   "1+23-4-5+6+7+8+9",
//   "1+23-4-5-6*7+8*9",
//   "1+23-45+67+8-9",
//   "1-2*3*4+5-6+78-9",
//   "1-2*3*4-5-6+7+8*9",
//   "1-2*3+4*5+6+7+8+9",
//   "1-2*3+4*5-6*7+8*9",
//   "1-2*3+4+5+6*7+8-9",
//   "1-2*3+4+5-6+7*8-9",
//   "1-2*3+4+56+7-8-9",
//   "1-2*3+45-67+8*9",
//   "1-2*3-4+5*6+7+8+9",
//   "1-2*3-4-5+6*7+8+9",
//   "1-2*3-4-5-6+7*8+9",
//   "1-2*3-4-5-6-7+8*9",
//   "1-2*34+5*6-7+89",
//   "1-2+3*4*5-6-7+8-9",
//   "1-2+3+4-5*6+78-9",
//   "1-2+3+45+6-7+8-9",
//   "1-2+3-4*5-6+78-9",
//   "1-2+3-45+6-7+89",
//   "1-2-3*4+5+6+7*8-9",
//   "1-2-3*4-5-6+78-9",
//   "1-2-3+4-5+67-8-9",
//   "1-2-3+45-6-7+8+9",
//   "1-2-34+5+6+78-9",
//   "1-2-34+56+7+8+9",
//   "1-2-34-5+6+7+8*9",
//   "1-23*4+5+6*7+89",
//   "1-23+4*5-6*7+89",
//   "1-23+4-5+67-8+9",
//   "1-23+45-67+89",
//   "1-23-4+5+67+8-9",
//   "1-23-4-5-6-7+89",
//   "12*3*4-5*6-78+9",
//   "12*3+4+5+6-7-8+9",
//   "12*3+4+5-6+7+8-9",
//   "12*3-4-5-6+7+8+9",
//   "12*3-4-56+78-9",
//   "12+3*4+5+6-7+8+9",
//   "12+3*45-6-7-89",
//   "12+3+4-56-7+89",
//   "12+3-4*5+67-8-9",
//   "12+3-45+6+78-9",
//   "12+34-5-6-7+8+9",
//   "12-3*4*5+6+78+9",
//   "12-3*4-5+67-8-9",
//   "12-3+4*5+6-7+8+9",
//   "12-3+4+56-7-8-9",
//   "12-3-4+5*6-7+8+9",
//   "12-3-4-56+7+89",
//   "12-3-45-6+78+9")
// ];

// @lc code=end
