/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // 计算中间位置
        const mid = Math.floor((left + right) / 2);

        // 找到目标值，直接返回下标
        if (nums[mid] === target) {
            return mid;
        }

        // 判断左半区间是否有序
        if (nums[left] <= nums[mid]) {
            // 目标值在左半有序区间内
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                // 目标值不在左半，去右半找
                left = mid + 1;
            }
        } 
        // 右半区间有序
        else {
            // 目标值在右半有序区间内
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                // 目标值不在右半，去左半找
                right = mid - 1;
            }
        }
    }

    // 未找到目标值
    return -1;
};
