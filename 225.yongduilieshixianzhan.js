var MyStack = function() {
    this.queue1 = []; // 主队列，存储栈元素
    this.queue2 = []; // 辅助中转队列
};

MyStack.prototype.push = function(x) {
    // 1. 新元素先放入空的辅助队列
    this.queue2.push(x);
    // 2. 把主队列所有元素转移到辅助队列
    while(this.queue1.length) {
        this.queue2.push(this.queue1.shift());
    }
    // 3. 清空主队列，再交换数据（避免引用残留）
    while(this.queue1.length) this.queue1.pop();
    while(this.queue2.length) this.queue1.push(this.queue2.shift());
};

MyStack.prototype.pop = function() {
    return this.queue1.shift();
};

MyStack.prototype.top = function() {
    return this.queue1[0];
};

MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};

/*
调用示例：
var obj = new MyStack()
obj.push(1)
obj.push(2)
console.log(obj.top())  // 2
console.log(obj.pop())  // 2
console.log(obj.empty())// false
*/