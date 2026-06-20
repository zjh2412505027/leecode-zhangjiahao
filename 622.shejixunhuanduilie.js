var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.capacity = k;
    this.front = 0;
    this.rear = 0;
    this.size = 0; // 新增计数器，记录当前元素数量
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
};

MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
};

MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    // 计算真实尾下标
    let realRear = (this.rear - 1 + this.capacity) % this.capacity;
    return this.queue[realRear];
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.size === this.capacity;
};