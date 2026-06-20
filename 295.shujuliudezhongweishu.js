var MedianFinder = function() {
    this.list = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // 二分查找插入位置，保证数组升序
    let left = 0, right = this.list.length;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if(this.list[mid] < num) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    this.list.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const len = this.list.length;
    const mid = Math.floor(len / 2);
    if(len % 2 === 1) {
        return this.list[mid];
    } else {
        return (this.list[mid - 1] + this.list[mid]) / 2;
    }
};