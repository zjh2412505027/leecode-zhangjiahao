/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    // 手写小顶堆
    this.minHeap = [];
    // 初始化填充初始数组
    for(const num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const heap = this.minHeap;
    const k = this.k;
    // 入堆
    heap.push(val);
    this.bubbleUp(heap.length - 1);

    // 堆超过k个，弹出最小的堆顶
    if(heap.length > k) {
        this.popTop();
    }
    return heap[0];
};

// 堆上浮
KthLargest.prototype.bubbleUp = function(idx) {
    const heap = this.minHeap;
    while(idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        if(heap[parent] > heap[idx]) {
            [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
            idx = parent;
        } else break;
    }
};

// 弹出堆顶并下沉
KthLargest.prototype.popTop = function() {
    const heap = this.minHeap;
    const top = heap[0];
    const last = heap.pop();
    if(heap.length > 0) {
        heap[0] = last;
        let idx = 0;
        const len = heap.length;
        while(true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let minIdx = idx;
            if(left < len && heap[left] < heap[minIdx]) minIdx = left;
            if(right < len && heap[right] < heap[minIdx]) minIdx = right;
            if(minIdx === idx) break;
            [heap[idx], heap[minIdx]] = [heap[minIdx], heap[idx]];
            idx = minIdx;
        }
    }
    return top;
};