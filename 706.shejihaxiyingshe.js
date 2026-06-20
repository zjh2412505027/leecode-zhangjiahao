var MyHashMap = function() {
    this.data = new Array(10009); // 取质数做桶容量，减少哈希冲突
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const idx = key % 10009;
    if(!this.data[idx]) this.data[idx] = [];
    // 先找有没有相同key，有就覆盖
    for(let i = 0; i < this.data[idx].length; i++){
        if(this.data[idx][i][0] === key){
            this.data[idx][i][1] = value;
            return;
        }
    }
    this.data[idx].push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const idx = key % 10009;
    if(!this.data[idx]) return -1;
    for(let [k, v] of this.data[idx]){
        if(k === key) return v;
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 * */
MyHashMap.prototype.remove = function(key) {
    const idx = key % 10009;
    if(!this.data[idx]) return;
    for(let i = 0; i < this.data[idx].length; i++){
        if(this.data[idx][i][0] === key){
            this.data[idx].splice(i, 1);
            return;
        }
    }
};