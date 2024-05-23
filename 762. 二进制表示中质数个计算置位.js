// 给你两个整数 left 和 right ，在闭区间 [left, right] 范围内，统计并返回 计算置位位数为质数 的整数个数。

// 计算置位位数 就是二进制表示中 1 的个数。

// 例如， 21 的二进制表示 10101 有 3 个计算置位。

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let j = 2; j * j <= num; j++) {
        if (num % j === 0) {
            return false
        }
    }
    return true;
}
const getCountSetBits = (temp) => {
    let count = 0;
    while(temp) {
        count += temp % 2;
        temp = Math.floor(temp / 2);
    }
    return count;
}
var countPrimeSetBits = function(left, right) {
    let res = 0;
    for (let i = left; i <= right; i++) {
        const count = getCountSetBits(i);
        if (isPrime(count)) {
            res += 1;
        }
    }
    return res;
};

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
console.log(countPrimeSetBits(842, 888));
