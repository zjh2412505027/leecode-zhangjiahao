/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];
    for (const char of s) {
        // 当前是右括号
        if (map[char]) {
            // 栈空 或 栈顶不匹配
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // 左括号入栈
            stack.push(char);
        }
    }
    // 栈必须清空才算合法
    return stack.length === 0;
};