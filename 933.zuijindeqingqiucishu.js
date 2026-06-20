var RecentCounter = function() {
    // 用队列存储所有请求时间
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    // 1. 把新请求时间加入队列
    this.queue.push(t);
    
    // 2. 移除所有 早于 t-3000 的请求（超出时间范围）
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    
    // 3. 队列长度就是答案
    return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */