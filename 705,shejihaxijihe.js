var MyHashSet = function() {
    // 哈希基数，取质数减少冲突
    this.BASE = 769;
    // 初始化桶数组，每个桶是一个数组（链表）
    this.buckets = new Array(this.BASE).fill(0).map(() => []);
};

// 计算哈希下标
MyHashSet.prototype.hash = function(key) {
    return key % this.BASE;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    if (!bucket.includes(key)) {
        bucket.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    const pos = bucket.indexOf(key);
    if (pos !== -1) {
        bucket.splice(pos, 1);
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const idx = this.hash(key);
    return this.buckets[idx].includes(key);
};