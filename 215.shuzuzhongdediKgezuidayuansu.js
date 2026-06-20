/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const targetIdx = nums.length - k; // 第k大对应升序下标
    
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    
    // 分区函数，返回基准最终下标
    const partition = (l, r) => {
        // 随机选基准，避免最坏O(n²)
        const rand = Math.floor(Math.random() * (r - l + 1)) + l;
        swap(nums, rand, r);
        const pivot = nums[r];
        let i = l;
        for(let j = l; j < r; j++) {
            if(nums[j] <= pivot) {
                swap(nums, i, j);
                i++;
            }
        }
        swap(nums, i, r);
        return i;
    }

    const quickSelect = (l, r) => {
        const p = partition(l, r);
        if(p === targetIdx) return nums[p];
        else if(p < targetIdx) return quickSelect(p + 1, r);
        else return quickSelect(l, p - 1);
    }

    return quickSelect(0, nums.length - 1);
};