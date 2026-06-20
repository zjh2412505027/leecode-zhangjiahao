/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // 1. 哈希表统计每个数字出现次数
    const map = new Map();
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // 手写小顶堆，堆内存储 [数值, 频次]，按频次升序
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }
        bubbleUp(idx) {
            while(idx > 0) {
                const parent = Math.floor((idx - 1) / 2);
                if(this.heap[parent][1] > this.heap[idx][1]) {
                    [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
                    idx = parent;
                } else break;
            }
        }
        pop() {
            const top = this.heap[0];
            const last = this.heap.pop();
            if(this.heap.length > 0) {
                this.heap[0] = last;
                this.sinkDown(0);
            }
            return top;
        }
        sinkDown(idx) {
            const len = this.heap.length;
            while(true) {
                let left = idx * 2 + 1;
                let right = idx * 2 + 2;
                let minIdx = idx;
                if(left < len && this.heap[left][1] < this.heap[minIdx][1]) minIdx = left;
                if(right < len && this.heap[right][1] < this.heap[minIdx][1]) minIdx = right;
                if(minIdx === idx) break;
                [this.heap[idx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[idx]];
                idx = minIdx;
            }
        }
        size() {
            return this.heap.length;
        }
    }

    const heap = new MinHeap();
    // 2. 遍历哈希，维护堆大小不超过k
    for(const [num, cnt] of map) {
        heap.push([num, cnt]);
        if(heap.size() > k) {
            heap.pop(); // 弹出频次最小的元素
        }
    }

    // 3. 取出堆内所有数字
    const res = [];
    while(heap.size()) {
        res.push(heap.pop()[0]);
    }
    return res;
};