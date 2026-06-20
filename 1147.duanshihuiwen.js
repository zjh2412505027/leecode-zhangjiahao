/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    let l = 0;
    let r = text.length - 1;
    let res = 0;
    let leftStr = '';
    let rightStr = '';

    while (l < r) {
        leftStr += text[l];
        rightStr = text[r] + rightStr;
        l++;
        r--;
        if (leftStr === rightStr) {
            res += 2;
            leftStr = '';
            rightStr = '';
        }
    }
    // 中间剩单个字符 / 剩余一截未匹配
    if (leftStr !== '' || l === r) {
        res += 1;
    }
    return res;
};