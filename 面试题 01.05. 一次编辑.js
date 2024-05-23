/**
 * 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 
 * 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 * @param {string} first
 * @param {string} second
 * @return {boolean}
*/
var oneEditAway = function(first, second) {
    if (first === second) {
        return true;
    }
    // 替换
    if (first.length === second.length) {
        let flag = false;
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) {
                if (flag) {
                    return false;
                }
                flag = true
            }
        }
        return true;
    }

    // 删除
    if (Math.abs(first.length - second.length) === 1) {
        let flag = false;
        const temp = first;
        if (second.length > first.length) {
            first = second;
            second = temp;
        }
        for (let i = 0, j = 0; i < first.length && j < second.length;) {
            if (first[i] !== second[j]) {
                if (flag) {
                    return false;
                }
                flag = true;
                i++
            } else {
                i++;
                j++;
            }
        }
        return true;
    }

    return false;
};
console.log(oneEditAway('pale', 'ple'));
console.log(oneEditAway('pales', 'pal'));
