/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;
    const n = s.length;

    // 中心扩散函数：left、right为扩散中心点
    const spread = (left, right) => {
        while(left >= 0 && right < n && s[left] === s[right]){
            res++;
            left--;
            right++;
        }
    }

    for(let i = 0; i < n; i++){
        spread(i, i);     // 奇数长度回文，中心i
        spread(i, i+1);   // 偶数长度回文，中心i和i+1
    }
    return res;
};