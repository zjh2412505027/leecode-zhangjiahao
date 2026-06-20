/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
    const n = s.length;
    let ans = 0;

    // 判断掩码对应的子序列是否回文
    const isPal = (mask) => {
        let str = '';
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) str += s[i];
        }
        let l = 0, r = str.length - 1;
        while (l < r) {
            if (str[l] !== str[r]) return false;
            l++;
            r--;
        }
        return true;
    };

    // 预处理：所有回文掩码 -> 长度
    const palMap = new Map();
    for (let mask = 1; mask < (1 << n); mask++) {
        if (isPal(mask)) {
            let len = 0;
            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) len++;
            }
            palMap.set(mask, len);
        }
    }

    const palList = [...palMap];
    // 两两枚举不重叠回文
    for (let [m1, len1] of palList) {
        for (let [m2, len2] of palList) {
            if ((m1 & m2) === 0) {
                ans = Math.max(ans, len1 * len2);
            }
        }
    }
    return ans;
};