/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    let maxStr = '';
    let left = 1, right = s.length - 1;

    // 二分查找子串长度
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let found = check(s, mid);
        if (found) {
            maxStr = found;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return maxStr;
};

// 查找是否存在长度为len的重复子串，存在则返回该子串，否则返回''
function check(s, len) {
    const set = new Set();
    for (let i = 0; i <= s.length - len; i++) {
        const sub = s.slice(i, i + len);
        if (set.has(sub)) return sub;
        set.add(sub);
    }
    return '';
}