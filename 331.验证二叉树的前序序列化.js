/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    while(/\d+,#,#/.test(preorder)) {
        preorder = preorder.replace(/\d+,#,#/g, '#');
    }
    return preorder === '#';
};
console.log(isValidSerialization("1,#,#,#,#"));
console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));
console.log(isValidSerialization("1,#"));
console.log(isValidSerialization("9,#,#,1"));
// @lc code=end

