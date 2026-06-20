var FreqStack = function() {
    this.stack = [];          // 多层栈，按频率分层存元素
    this.countMap = new Map();// 记录每个数字出现频次
    this.maxFreq = 0;         // 当前最大频率
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    // 更新频次
    let cnt = (this.countMap.get(val) || 0) + 1;
    this.countMap.set(val, cnt);
    // 最大频率更新
    if (cnt > this.maxFreq) this.maxFreq = cnt;
    // 栈层数不够就新增一层
    if (!this.stack[cnt]) this.stack[cnt] = [];
    this.stack[cnt].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    // 取最大频率那一层最后一个元素
    let topArr = this.stack[this.maxFreq];
    let res = topArr.pop();
    // 该层空了，最大频率降一
    if (topArr.length === 0) this.maxFreq--;
    // 次数减一
    this.countMap.set(res, this.countMap.get(res) - 1);
    return res;
};