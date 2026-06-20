/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 2) return 0;
    // 初始化布尔数组，isPrime[i] 代表i是不是质数
    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;
    // 埃氏筛：从2开始，把i的倍数全部标记为非质数
    for(let i = 2; i * i < n; i++){
        if(isPrime[i]){
            // i*i 开始标记
            for(let j = i * i; j < n; j += i){
                isPrime[j] = false;
            }
        }
    }
    // 统计true的数量
    return isPrime.filter(item => item).length;
};