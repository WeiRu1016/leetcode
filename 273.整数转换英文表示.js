/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const arr1 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const arr2 = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const arr3 = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const arr4 = ['Thousand', 'Million', 'Billion'];
var numberToWords = function(num) {
    if (num === 0) {
        return 'Zero';
    }
    const result = [];
    while(num > 0) {
        let temp = num % 1000;
        const str = [];
        if (temp >= 100) {
            str.push(`${arr1[Math.floor(temp / 100) - 1]} Hundred`);
            temp = temp % 100;
        }
        if (temp > 10 && temp < 20) {
            str.push(`${arr2[temp - 11]}`);
        } else {
            if (temp > 9) {
                str.push(`${arr3[Math.floor(temp / 10) - 1]}`);
                temp = temp % 10;
            }
    
            if (temp > 0) {
                str.push(`${arr1[temp - 1]}`);
            }
        }

        result.push(str.join(' '));

        num = Math.floor(num / 1000);
    }
    const temp = result[0] ? [result[0]] : [];
    for (let i = 1; i < result.length; i++) {
        if (result[i]) {
            temp.unshift(arr4[i - 1]);
            temp.unshift(result[i]);
        }
    }
    return temp.join(' ');
};
console.log(numberToWords(123) === 'One Hundred Twenty Three');
console.log(numberToWords(12345) === 'Twelve Thousand Three Hundred Forty Five');
console.log(numberToWords(1234567) === 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
console.log(numberToWords(1000) === 'One Thousand')
// @lc code=end

