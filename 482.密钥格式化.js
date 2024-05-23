/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting1 = function(s, k) {
    const reg = new RegExp(`(\\w{0,${k}})`, 'g')
    return s.replace(/-/g, '').toUpperCase().split('').reverse().join('').match(reg).filter(Boolean).join('-').split('').reverse().join('');
};
var licenseKeyFormatting = function(s, k) {
    const result = [];
    let char = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== '-') {
            result.unshift(s[i].toUpperCase());
            if ((result.length - char) % k === 0) {
                result.unshift('-');
                char += 1;
            }
        }
    }
    if (result[0] === '-') {
        result.shift();
    }
    return result.join('');
};
// console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4) === '5F3Z-2E9W');
// console.log(licenseKeyFormatting('2-5g-3-J', 2) === '2-5G-3J');
console.log(licenseKeyFormatting('2-4A0r7-4k', 4));
// @lc code=end

