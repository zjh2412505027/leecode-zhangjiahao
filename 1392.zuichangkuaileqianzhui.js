/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const total = 1 << k; // 2^k
    const set = new Set();
    const n = s.length;

    // 滑动截取长度为k的子串
    for (let i = 0; i <= n - k; i++) {
        const sub = s.slice(i, i + k);
        set.add(sub);
        // 提前剪枝，凑够数量直接返回
        if (set.size === total) return true;
    }
    return set.size === total;
};