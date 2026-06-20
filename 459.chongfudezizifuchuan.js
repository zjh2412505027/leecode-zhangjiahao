/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // 拼接s+s，掐头去尾，判断原s是否包含在内
    let double = s + s;
    let newStr = double.slice(1, double.length - 1);
    return newStr.includes(s);
};