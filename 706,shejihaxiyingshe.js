var MyHashMap = function() {
    // 质数桶容量，减少哈希冲突
    this.BASE = 769;
    // 每个桶是数组，存放 [key, value] 二元组
    this.buckets = new Array(this.BASE).fill(0).map(() => []);
};

// 哈希函数，兼容负数 key
MyHashMap.prototype.hash = function(key) {
    let mod = key % this.BASE;
    return mod < 0 ? mod + this.BASE : mod;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    // 先找是否已存在该 key，存在则覆盖 value
    for (let i = 0; i < bucket.length; i++) {
        const [k, v] = bucket[i];
        if (k === key) {
            bucket[i][1] = value;
            return;
        }
    }
    // 不存在则新增键值对
    bucket.push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    for (const [k, v] of bucket) {
        if (k === key) {
            return v;
        }
    }
    // 题目要求不存在返回 -1
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    for (let i = 0; i < bucket.length; i++) {
        const [k] = bucket[i];
        if (k === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */