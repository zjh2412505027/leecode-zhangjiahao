/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = new Array(n);
    dp[0] = 1;
    let p2 = 0, p3 = 0, p5 = 0;
    for(let i = 1; i < n; i++) {
        const num2 = dp[p2] * 2;
        const num3 = dp[p3] * 3;
        const num5 = dp[p5] * 5;
        dp[i] = Math.min(num2, num3, num5);
        // 匹配则指针右移，防止生成重复丑数
        if(dp[i] === num2) p2++;
        if(dp[i] === num3) p3++;
        if(dp[i] === num5) p5++;
    }
    return dp[n - 1];
};