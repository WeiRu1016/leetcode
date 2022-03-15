/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let start = 0;
    let end = s.length - 1;
    const arr = s.split('');
    while(start < end) {
        const reg = /[a-zA-Z]/;
        if (!reg.test(arr[start])) {
            start++;
        } else if (!reg.test(arr[end])) {
            end--;
        } else {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    return arr.join('');
};
console.log(reverseOnlyLetters('ab-cd') === 'dc-ba');
console.log(reverseOnlyLetters('a-bC-dEf-ghIj') === 'j-Ih-gfE-dCba');
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!') === 'Qedo1ct-eeLg=ntse-T!');
// @lc code=end

