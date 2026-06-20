/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const n = t.length;
    // dp[j] 表示当前遍历到s的字符时，匹配t前j个字符的子序列个数
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 空串的边界条件

    for (const char of s) {
        // 从后往前遍历，避免覆盖dp[j-1]的值
        for (let j = n; j >= 1; j--) {
            if (char === t[j - 1]) {
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[n];
};