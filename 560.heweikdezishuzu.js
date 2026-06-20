/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let currentSum = 0;
    const prefixCounts = new Map();
    prefixCounts.set(0, 1); // 初始化前缀和为0的次数为1
    
    for (const num of nums) {
        currentSum += num;
        const target = currentSum - k;
        // 累加满足条件的前缀和出现次数
        if (prefixCounts.has(target)) {
            count += prefixCounts.get(target);
        }
        // 更新当前前缀和的出现次数
        prefixCounts.set(currentSum, (prefixCounts.get(currentSum) || 0) + 1);
    }
    
    return count;
};
    