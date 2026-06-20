/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    if (s.length === 0) return s;
    // 构造拼接串 s + # + 反转s，#防止跨匹配
    const rev = s.split('').reverse().join('');
    const str = s + '#' + rev;
    const n = str.length;
    const next = new Array(n).fill(0);

    // KMP 求前缀函数 next 数组
    for (let i = 1; i < n; i++) {
        let j = next[i - 1];
        while (j > 0 && str[i] !== str[j]) {
            j = next[j - 1];
        }
        if (str[i] === str[j]) {
            j++;
        }
        next[i] = j;
    }

    // next最后一位 = 最长回文前缀长度
    const maxLen = next[n - 1];
    // 需要补充的部分：原串后面不属于回文前缀的子串反转
    const add = s.slice(maxLen).split('').reverse().join('');
    return add + s;
};