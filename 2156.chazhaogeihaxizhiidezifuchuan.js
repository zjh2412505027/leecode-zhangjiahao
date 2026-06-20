/**
 * @param {string} s
 * @param {number} power
 * @param {number} modulo
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */
var subStrHash = function(s, power, modulo, k, hashValue) {
    const n = s.length;
    const getVal = c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    // 预计算 power^k % mod
    let powK = 1;
    for (let i = 0; i < k; i++) {
        powK = (powK * power) % modulo;
    }

    let curHash = 0;
    // 初始化最右侧窗口哈希（逆序计算适配题目公式）
    for (let i = n - 1; i >= n - k; i--) {
        curHash = (curHash * power + getVal(s[i])) % modulo;
    }

    let start = n - k;
    if (curHash === hashValue) start = n - k;

    // 逆序滑动窗口
    for (let i = n - k - 1; i >= 0; i--) {
        // 移除右端超出窗口字符
        curHash = (curHash - getVal(s[i + k]) * powK) % modulo;
        if (curHash < 0) curHash += modulo;
        // 左侧新增字符
        curHash = (curHash * power + getVal(s[i])) % modulo;

        if (curHash === hashValue) {
            start = i;
        }
    }

    return s.substring(start, start + k);
};