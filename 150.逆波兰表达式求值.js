/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (['+', '-', '*', '/'].includes(tokens[i])) {
            const num1 = stack.pop();
            const num2 = stack.pop();
            switch(tokens[i]) {
                case '+':
                    stack.push(num1 + num2);
                break;
                case '-':
                    stack.push(num2 - num1);
                break;
                case '*':
                    stack.push(num1 * num2);
                break;
                case '/':
                    stack.push(num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1));
                break;
            }
        } else {
            stack.push(Number(tokens[i]));
        }
    }
    return stack.pop();
};
console.log(evalRPN(["4","-2","/","2","-3","-","-"]) === -7);
console.log(evalRPN(["2","1","+","3","*"]) === 9);
console.log(evalRPN(["4","13","5","/","+"]) === 6);
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) === 22);
// @lc code=end

