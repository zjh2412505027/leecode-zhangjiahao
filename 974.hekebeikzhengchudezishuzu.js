/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map = new Map();
    map.set(0, 1);
    let preSum = 0, res = 0;
    for (let num of nums) {
        preSum += num;
        // 处理负数取模，保证余数落在 0~k-1
        let mod = (preSum % k + k) % k;
        if (map.has(mod)) {
            res += map.get(mod);
        }
        map.set(mod, (map.get(mod) || 0) + 1);
    }
    return res;
};