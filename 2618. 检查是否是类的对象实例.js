
// 请你编写一个函数，检查给定的值是否是给定类或超类的实例。
// 可以传递给函数的数据类型没有限制。例如，值或类可能是  undefined 。

// 示例 1：

// 输入：func = () => checkIfInstance(new Date(), Date)
// 输出：true
// 解释：根据定义，Date 构造函数返回的对象是 Date 的一个实例。
// 示例 2：

// 输入：func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), Animal); }
// 输出：true
// 解释：
// class Animal {};
// class Dog extends Animal {};
// checkIfInstanceOf(new Dog(), Animal); // true

// Dog 是 Animal 的子类。因此，Dog 对象同时是 Dog 和 Animal 的实例。
// 示例 3：

// 输入：func = () => checkIfInstance(Date, Date)
// 输出：false
// 解释：日期的构造函数在逻辑上不能是其自身的实例。
// 示例 4：

// 输入：func = () => checkIfInstance(5, Number)
// 输出：true
// 解释：5 是一个 Number。注意，"instanceof" 关键字将返回 false。
/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf1 = function(obj, classFunction) {
    if (obj == null || !(classFunction instanceof Function)) {
        return false;
    }
    return Object(obj) instanceof classFunction;
};
var checkIfInstanceOf = function(obj, classFunction) {
    while(obj != null) {
        obj = Object.getPrototypeOf(obj);
        if (obj === classFunction.prototype) {
            return true;
        }
    }
    return false;
};
console.log(checkIfInstanceOf(Number.NaN, Number) === true); // true
console.log(checkIfInstanceOf(0, Number) === true); // true
console.log(checkIfInstanceOf(new Date(), Date) === true); // true
class Animal {}; class Dog extends Animal {};
console.log(checkIfInstanceOf(new Dog(), Animal) === true); // true
console.log(checkIfInstanceOf(Date, Date) === false); // false
console.log(checkIfInstanceOf(5, Number) === true); // true
/**
 * checkIfInstanceOf(new Date(), Date); // true
 */