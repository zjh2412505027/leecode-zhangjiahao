/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number}
 */
var longestCommonSubpath = function(n, paths) {
    const BASE = 100003n;
    const MOD = BigInt(10 ** 18 + 3);

    // 二分右边界：所有路径最短长度
    let minLen = paths[0].length;
    for (const p of paths) {
        minLen = Math.min(minLen, p.length);
    }

    // 预处理 base^k
    const pow = new Array(minLen + 1);
    pow[0] = 1n;
    for (let i = 1; i <= minLen; i++) {
        pow[i] = (pow[i - 1] * BASE) % MOD;
    }

    // 得到当前数组所有长度 L 的子串哈希集合
    const getHash = (arr, L) => {
        const s = new Set();
        if (L === 0 || arr.length < L) return s;
        let h = 0n;
        for (let i = 0; i < L; i++) {
            h = (h * BASE + BigInt(arr[i])) % MOD;
        }
        s.add(h);
        for (let i = L; i < arr.length; i++) {
            h = h - BigInt(arr[i - L]) * pow[L];
            h %= MOD;
            if (h < 0n) h += MOD;
            h = (h * BASE + BigInt(arr[i])) % MOD;
            s.add(h);
        }
        return s;
    };

    // 判断是否存在长度 len 的公共子路径
    const check = (len) => {
        if (len === 0) return true;
        let same = getHash(paths[0], len);
        if (same.size === 0) return false;
        for (let i = 1; i < paths.length; i++) {
            const cur = getHash(paths[i], len);
            const next = new Set();
            for (const val of same) {
                if (cur.has(val)) next.add(val);
            }
            if (next.size === 0) return false;
            same = next;
        }
        return true;
    };

    // 二分查找最大可行长度
    let l = 0, r = minLen, res = 0;
    while (l <= r) {
        const mid = (l + r) >> 1;
        if (check(mid)) {
            res = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return res;
};