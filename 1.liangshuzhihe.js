/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 创建哈希表存储已遍历元素和下标
    const map = new Map();
    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 计算需要的补数
        const complement = target - nums[i];
        // 哈希表中存在补数，直接返回结果
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        // 未找到则存入当前元素和下标
        map.set(nums[i], i);
    }
    // 题目保证有唯一解，此行不会执行
    return [];
};