/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    const seen = new Set();
    const n = nums.length;

    // 枚举子数组起点
    for (let i = 0; i < n; i++) {
        let divCount = 0;
        let path = [];
        // 枚举子数组终点
        for (let j = i; j < n; j++) {
            if (nums[j] % p === 0) {
                divCount++;
            }
            // 超过k就不能继续往后延伸
            if (divCount > k) break;
            
            path.push(nums[j]);
            // 用逗号拼接字符串去重
            seen.add(path.join(','));
        }
    }
    return seen.size;
};