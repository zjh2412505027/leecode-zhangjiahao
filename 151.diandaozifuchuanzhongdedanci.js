/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 先trim去掉首尾空格，再按任意多个空格分割成单词数组
    let words = s.trim().split(/\s+/);
    // 反转数组再用单个空格拼接
    return words.reverse().join(' ');
};