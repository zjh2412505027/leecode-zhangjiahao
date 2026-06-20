/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
    const n = s.length;
    const z = new Array(n).fill(0);
    z[0] = n;
    let l = 0, r = 0;

    for (let i = 1; i < n; i++) {
        if (i <= r) {
            z[i] = Math.min(r - i + 1, z[i - l]);
        }
        while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
            z[i]++;
        }
        if (i + z[i] - 1 > r) {
            l = i;
            r = i + z[i] - 1;
        }
    }

    let total = 0;
    for (const num of z) total += num;
    return total;
};