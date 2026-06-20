/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
    const n = text.length;
    const set = new Set();

    // k 是一半长度，整体子串长 2*k
    for (let k = 1; k <= n / 2; k++) {
        // 起点 i，子串总长 2k
        for (let i = 0; i + 2 * k <= n; i++) {
            const mid = i + k;
            let same = true;
            for (let j = 0; j < k; j++) {
                if (text[i + j] !== text[mid + j]) {
                    same = false;
                    break;
                }
            }
            if (same) {
                const sub = text.slice(i, i + 2 * k);
                set.add(sub);
            }
        }
    }
    return set.size;
};