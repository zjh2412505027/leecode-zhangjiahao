var rotate = function(nums, k) {
    const n = nums.length;
    // 关键：k可能大于数组长度，取模得到有效步数
    k %= n;
    if (k === 0) return;

    // 反转整个数组
    reverse(nums, 0, n - 1);
    // 反转前k个元素
    reverse(nums, 0, k - 1);
    // 反转后n-k个元素
    reverse(nums, k, n - 1);

    // 辅助反转函数
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
};