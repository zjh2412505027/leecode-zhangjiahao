/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    const map = new Map();
    const res = [];
    // 单词映射下标
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], i);
    }

    // 判断是否回文
    const isPal = (str) => {
        let l = 0, r = str.length - 1;
        while (l < r) {
            if (str[l++] !== str[r--]) return false;
        }
        return true;
    };

    for (let idx = 0; idx < words.length; idx++) {
        const word = words[idx];
        const len = word.length;
        // 分割点 k: 0 ~ len
        for (let k = 0; k <= len; k++) {
            const prefix = word.slice(0, k);
            const suffix = word.slice(k);

            // 前缀回文: 找反转后缀放前面
            if (isPal(prefix)) {
                const revSuf = suffix.split('').reverse().join('');
                if (map.has(revSuf) && map.get(revSuf) !== idx) {
                    res.push([map.get(revSuf), idx]);
                }
            }

            // 后缀回文: 找反转前缀放后面
            if (k !== len && isPal(suffix)) {
                const revPre = prefix.split('').reverse().join('');
                if (map.has(revPre) && map.get(revPre) !== idx) {
                    res.push([idx, map.get(revPre)]);
                }
            }
        }
    }
    return res;
};