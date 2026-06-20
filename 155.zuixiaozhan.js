var MinStack = function() {
    // 主栈存所有元素
    this.stack = [];
    // 辅助栈存递减最小值
    this.minStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value);
    // 辅助栈为空 或 当前值小于等于栈顶，入辅助栈
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const topVal = this.stack.pop();
    // 弹出元素是当前最小值，辅助栈同步出栈
    if (topVal === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};