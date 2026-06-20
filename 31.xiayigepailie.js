/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 1. 从后往前找第一个左边界i：nums[i] < nums[i+1]
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 2. 如果找到i，继续找右边界j
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // 交换i和j
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 3. 反转i后面的所有元素（i<0时反转整个数组）
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
