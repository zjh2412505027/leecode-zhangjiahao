/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    // 1. 把负数、0、大于n的数标记为 n+1（无效化）
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }

    // 2. 原地标记：把数字x对应的下标x-1置为负数
    for (let i = 0; i < n; i++) {
        const x = Math.abs(nums[i]); // 取绝对值，避免重复标记
        if (x <= n) {
            nums[x - 1] = -Math.abs(nums[x - 1]);
        }
    }

    // 3. 找第一个正数的下标，对应答案 i+1
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    // 1~n 都存在，答案是 n+1
    return n + 1;
};
