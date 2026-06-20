var maxSlidingWindow = function(nums, k) {
    const q = []; // 双端队列，存下标（单调递减）
    const res = []; // 结果数组

    for (let i = 0; i < nums.length; i++) {
        // 1. 移除队尾 小于当前值 的元素（维护递减）
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i); // 加入当前下标

        // 2. 移除队头 超出窗口 的元素
        while (q[0] <= i - k) {
            q.shift();
        }

        // 3. 窗口形成（i >= k-1），记录最大值
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;
};