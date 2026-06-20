/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    const n = s.length;
    // 进制、模数，双哈希防碰撞，这里用一组演示够用
    const BASE = 911382629;
    const MOD = 1n << 61n - 1n;
    let answer = "";

    // 预处理前缀哈希 + 幂数组（BigInt 避免溢出）
    let prefix = new Array(n + 1).fill(0n);
    let pow = new Array(n + 1).fill(1n);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = (prefix[i] * BigInt(BASE) + BigInt(s.charCodeAt(i))) % MOD;
        pow[i + 1] = (pow[i] * BigInt(BASE)) % MOD;
    }

    // 获取 [l, r] 子串哈希，下标从0开始，长度len
    const getHash = (l, len) => {
        const r = l + len;
        let res = (prefix[r] - prefix[l] * pow[len]) % MOD;
        return res < 0n ? res + MOD : res;
    };

    // 二分判断：是否存在长度为 len 的重复子串，存在返回其中一个子串，否则 null
    const check = (len) => {
        if (len === 0) return null;
        const seen = new Map();
        for (let i = 0; i <= n - len; i++) {
            const h = getHash(i, len);
            if (seen.has(h)) {
                return s.slice(i, i + len);
            }
            seen.set(h, true);
        }
        return null;
    };

    // 二分长度范围 [0, n-1]
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        const tmp = check(mid);
        if (tmp !== null) {
            // 存在更长可能
            answer = tmp;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
};