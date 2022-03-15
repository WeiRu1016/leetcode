/*
 * @lc app=leetcode.cn id=564 lang=javascript
 *
 * [564] 寻找最近的回文数
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic1 = function(n) {
    let arr = n.split('');
    let start = 0;
    let end = arr.length - 1;
    let hasChanged = false;
    let dur = [];
    while(start < end) {
        if (arr[start] !== arr[end]) {
            const num1 = +arr[start];
            const num2 = +arr[end];

            const equal = Math.abs(num2 - num1);
            const low = num2 >= num1 - 1 || end - start > 1 ? Infinity : (10 + num2 - num1 + 1);
            const hight = num1 + 1 >= num2 || end - start > 1 ? Infinity : (10 + num1 + 1 - num2);

            if (num1 === 9) {
                if (low <= equal) {
                    arr[start] = num1 - 1;
                    arr[end] = num1 - 1;
                    dur.unshift(low);
                } else {
                    arr[end] = num1;
                    dur.unshift(equal);
                }
            } else if (num1 <= 1) {
                if (equal <= hight) {
                    arr[end] = num1;
                    dur.unshift(equal);
                } else {
                    arr[start] = num1 + 1;
                    arr[end] = num1 + 1;
                    dur.unshift(hight);
                }
            } else {
                if (low <= equal && low <= hight) {
                    arr[start] = num1 - 1;
                    arr[end] = num1 - 1;
                    dur.unshift(low);
                } else if (equal <= low && equal <= hight) {
                    arr[end] = num1;
                    dur.unshift(equal);
                } else {
                    arr[start] = num1 + 1;
                    arr[end] = num1 + 1;
                    dur.unshift(hight);
                }
            }
            hasChanged = true;
        } else {
            dur.unshift(0);
        }
        start++;
        end--;
    }

    let temp = [];
    if (!hasChanged) {
        if (start === end) {
            arr[start] = arr[start] >= 1 ? arr[start] - 1 : (+arr[start]) + 1;
            temp = Array(arr.length - start).fill('0');
            temp[0] = '1';
        } else {
            arr[start] = arr[end] = arr[start] > 1 ? arr[start] - 1 : arr[start] + 1;
            temp = Array(arr.length - end).fill('0');
            temp[0] = '1';
            temp[1] = '1';
        }
    } else {
        let flag = false;
        for (let i = 0; i < dur.length; i++) {
            if (dur[i] === 0 && !flag) {
                continue;
            } else {
                flag = true;
                temp.push(dur[i]);
            }
        }

        if (start === end && arr[start] < 9) {
            const _dur = [];
            let c = 1;
            for (let i = n.length - 1; i > start; i--) {
                let num = 9 - (+n[i]) + (+arr[i]) + c;
                if (num > 9) {
                    c = 1;
                    num = num - 10;
                } else {
                    c = 0;
                }
                _dur.unshift(num);
            }

            let _temp = [];

            if (c > 0) {
                _temp = [c, ..._dur];
            } else {
                let flag = false;
                for (let i = 0; i < _dur.length; i++) {
                    if (_dur[i] === 0 && !flag) {
                        continue;
                    } else {
                        flag = true;
                        _temp.push(_dur[i]);
                    }
                }
            }

            let isMin = true;
            if (_temp.length === temp.length) {
                for (let i = 0; i < temp.length; i++) {
                    if (_temp[i] < temp[i]) {
                        isMin = true;
                        break;
                    }
                    if (_temp[i] > temp[i]) {
                        isMin = false;
                        break;
                    }
                }
            } else {
                isMin = _temp.length < temp.length;
            }

            if (isMin) {
                hasChanged = true;
                arr[start] = (+n[start]) + 1;
                temp = _temp;
            }
        }

        if (start === end && arr[start] > 0) {
            const _dur = [];
            let c = 0;
            for (let i = n.length - 1; i > start; i--) {
                let num = 10 + (+n[i]) - (+arr[i]) + c;
                if (num > 9) {
                    c = 0;
                    num = num - 10;
                } else {
                    c = -1;
                }
                _dur.unshift(num);
            }
            let _temp = [];
            if (c >= 0) {
                _temp = [c, ..._dur];
            } else {
                let flag = false;
                for (let i = 0; i < _dur.length; i++) {
                    if (_dur[i] === 0 && !flag) {
                        continue;
                    } else {
                        flag = true;
                        _temp.push(_dur[i]);
                    }
                }
            }

            let isMin = true;

            if (_temp.length === temp.length) {
                for (let i = 0; i < temp.length; i++) {
                    if (_temp[i] < temp[i]) {
                        isMin = true;
                        break;
                    }
                    if (_temp[i] > temp[i]) {
                        isMin = false;
                        break;
                    }
                }
            } else {
                isMin = _temp.length < temp.length;
            }

            if (isMin) {
                hasChanged = true;
                arr[start] = n[start] - 1;
                temp = _temp;
            }
        }
    }

    if (n[0] === '1' && n.length > 1) {
        const _dur = [];
        let c = 1;
        for (let i = n.length - 1; i >= 1; i--) {
            let num = (+n[i]) + c;
            if (num > 9) {
                c = 1;
                num = num - 10;
            } else {
                c = 0;
            }
            _dur.unshift(num);
        }
        const _temp = [];
        let flag = false;
        for (let i = 0; i < _dur.length; i++) {
            if (_dur[i] === 0 && !flag) {
                continue;
            } else {
                flag = true;
                _temp.push(_dur[i]);
            }
        }

        let isMin = true;

        if (_temp.length === temp.length) {
            for (let i = 0; i < temp.length; i++) {
                if (_temp[i] < temp[i]) {
                    isMin = true;
                    break;
                }
                if (_temp[i] > temp[i]) {
                    isMin = false;
                    break;
                }
            }
        } else {
            isMin = _temp.length < temp.length;
        }

        if (isMin) {
            hasChanged = true;
            arr = Array(n.length - 1).fill('9');
        }
    }

    if (n[0] === '9' && n.length > 1) {
        const _dur = [];
        let c = 2;
        for (let i = n.length - 1; i >= 1; i--) {
            let num = 9 - (+n[i]) + c;
            if (num > 9) {
                c = 1;
                num = num - 10;
            } else {
                c = 0;
            }
            _dur.unshift(num);
        }

        const _temp = [];
        let flag = false;
        for (let i = 0; i < _dur.length; i++) {
            if (_dur[i] === 0 && !flag) {
                continue;
            } else {
                flag = true;
                _temp.push(_dur[i]);
            }
        }

        let isMin = true;
        if (_temp.length === temp.length) {
            for (let i = 0; i < temp.length; i++) {
                if (_temp[i] < temp[i]) {
                    isMin = true;
                    break;
                }
                if (_temp[i] > temp[i]) {
                    isMin = false;
                    break;
                }
            }
        } else {
            isMin = _temp.length < temp.length;
        }

        if (isMin) {
            hasChanged = true;
            arr = Array(n.length + 1).fill('0');
            arr[0] = '1';
            arr[arr.length - 1] = '1';
        }
    }

    return arr.join('');
};
var nearestPalindromic = function(n) {
    if (n.length === 0) {
        return (n - 1).toString();
    }
    if (/^9(9+)$/.test(n)) {
        return `1${Array(n.length - 1).fill('0').join('')}1`;
    } else if (/^1(0)*(0|1)$/.test(n)) {
        return `${Array(n.length - 1).fill('9').join('')}`;
    }

    const arr = n.split('');
    let temp = 0;
    let start = 0;
    let end = n.length - 1;
    while(start < end) {
        arr[end] = arr[start];
        if (n[start] !== n[end]) {
            temp += (n[start] - n[end]) * Math.pow(10, n.length - 1 - end);
        }
        start++;
        end--;
    }

    if (start === end) {
        arr[start] = n[start];
    }

    const dur = Math.pow(10, n.length - 1 - start) * (start === end ? 1 : 11);
    // 减少中间
    if (temp > 0 && arr[start] > 0 && dur - 2 * temp <= 0) {
        arr[start] = arr[end] = arr[start] - 1;
    } else if (temp < 0 && arr[start] < 9 && dur + 2 * temp < 0) { // 增加中间
        arr[start] = arr[end] = (+arr[start]) + 1;
    } else if (temp === 0) {
        arr[start] = arr[end] = arr[start] - (arr[start] > 0 ? 1 : -1);
    }
    return arr.join('');
}
// console.log(nearestPalindromic("1837722381") === '1837667381'); // '1837667381'
// console.log(nearestPalindromic('123892133') === '123888321');
// console.log(nearestPalindromic('230') === '232');
// console.log(nearestPalindromic('123') === '121');
// console.log(nearestPalindromic('12389') === '12421'); // 12421
// console.log(nearestPalindromic('1283') === '1331'); // 1331
// console.log(nearestPalindromic('99') === '101');
// console.log(nearestPalindromic('100') === '99');
// console.log(nearestPalindromic('12') == '11');
// console.log(nearestPalindromic('10') == '9');
// @lc code=end

