/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1
    let res = 0
    // 先跳过结尾所有空格
    while (i >= 0 && s[i] === ' ') i--
    // 统计最后单词的字母个数
    while (i >= 0 && s[i] !== ' ') {
        res++
        i--
    }
    return res
};