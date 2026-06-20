var MyQueue = function() {
    // 两个栈：输入栈 + 输出栈
    this.inStack = [];
    this.outStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // 入队：直接丢输入栈
    this.inStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 先把输入栈全部倒进输出栈
    this.transfer();
    // 输出栈顶 = 队首
    return this.outStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.transfer();
    return this.outStack.at(-1); // 取栈顶（不删除）
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // 两个栈都空才是空队列
    return this.inStack.length === 0 && this.outStack.length === 0;
};

// 工具函数：把输入栈全部倒入输出栈（仅当输出栈为空时）
MyQueue.prototype.transfer = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
};

/**
 * 调用示例：
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */