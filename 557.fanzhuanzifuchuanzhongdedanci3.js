/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 按空格分割成单词数组，每个单词转数组反转再拼接，最后用空格连起来
    return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
};