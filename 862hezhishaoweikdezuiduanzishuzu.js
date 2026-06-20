var shortestSubarray = function(nums, k) {
    const n = nums.length;
    // 前缀和数组 preSum[0] = 0, preSum[i] = nums[0]+...+nums[i-1]
    const preSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
    }

    const deque = []; // 双端队列，存下标，保持 preSum 单调递增
    let minLen = Infinity;

    for (let i = 0; i <= n; i++) {
        // 1. 满足条件：preSum[i] - preSum[队头] >= k
        // 队头是最优左边界，尝试更新答案，然后弹出（后面不会更优）
        while (deque.length && preSum[i] - preSum[deque[0]] >= k) {
            minLen = Math.min(minLen, i - deque.shift());
        }

        // 2. 维护单调递增：把队尾比当前大的全部弹出
        while (deque.length && preSum[i] <= preSum[deque[deque.length - 1]]) {
            deque.pop();
        }

        // 3. 加入当前下标
        deque.push(i);
    }

    return minLen === Infinity ? -1 : minLen;
};