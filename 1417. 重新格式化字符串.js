// 给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。

// 请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。

// 请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。

//  

// 示例 1：

// 输入：s = "a0b1c2"
// 输出："0a1b2c"
// 解释："0a1b2c" 中任意两个相邻字符的类型都不同。 "a0b1c2", "0a1b2c", "0c2a1b" 也是满足题目要求的答案。
// 示例 2：

// 输入：s = "leetcode"
// 输出：""
// 解释："leetcode" 中只有字母，所以无法满足重新格式化的条件。
// 示例 3：

// 输入：s = "1229857369"
// 输出：""
// 解释："1229857369" 中只有数字，所以无法满足重新格式化的条件。
// 示例 4：

// 输入：s = "covid2019"
// 输出："c2o0v1i9d"
// 示例 5：

// 输入：s = "ab123"
// 输出："1a2b3"
//  

// 提示：

// 1 <= s.length <= 500
// s 仅由小写英文字母和/或数字组成。


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/reformat-the-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {string}
 */
var reformat1 = function(s) {
    const charts = [];
    const nums = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 0 && s[i] <= 9) {
            nums.push(s[i]);
        } else {
            charts.push(s[i]);
        }
    }
    if (Math.abs(charts.length - nums.length) > 1) {
        return '';
    }
    let str = '';
    let arr1 = charts;
    let arr2 = nums;
    if (nums.length > charts.length) {
        arr1 = nums;
        arr2 = charts;
    }
    for (let i = 0; i < arr1.length; i++) {
        str = `${str}${arr1[i]}${arr2[i] ?? ''}`
    }
    return str;
};

// 参考答案 双指针
var reformat = function(s) {
    let str = '';
    let chart = -1;
    let num = -1;
    while(chart < s.length || num < s.length) {
        if (chart >= 0 && str.length > 0 && !Number.isFinite(+str[str.length - 1])) {
            return '';
        }
        if (chart >= 0 && chart < s.length) {
            str += `${s[chart]}`;
        }
        if (num >= 0 && str.length > 0 && Number.isFinite(+str[str.length - 1])) {
            // 因为是 chart 开头的，所有头还有1次机会
            if (Number.isFinite(+str[0])) {
                return '';
            } else {
                str = s[num] + str;
            }
        } else if (num >= 0 && num < s.length) {
            str += `${s[num]}`;
        }

        while(chart < s.length) {
            chart += 1;
            if (!Number.isFinite(+s[chart])) {
                break;
            }
        }
        while(num < s.length) {
            num += 1;
            if (Number.isFinite(+s[num])) {
                break;
            }
        }
    }
    return str;
}
// console.log(reformat("a12bcd"));
// console.log(reformat("1229857369"));
// console.log(reformat("covid2019"));
// console.log(reformat("j"));
// console.log(reformat("1"));
// console.log(reformat("leetcode"));
// console.log(reformat("ab123"));
