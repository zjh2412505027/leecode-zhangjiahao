/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    // 按斜杠分割，自动拆分连续/
    const parts = path.split('/');
    for(const part of parts) {
        // 空字符串(连续/)、单个点. 直接跳过
        if(part === '' || part === '.') continue;
        if(part === '..') {
            // 返回上一级，栈有内容才弹出
            if(stack.length > 0) stack.pop();
        } else {
            // 合法目录名入栈
            stack.push(part);
        }
    }
    // 拼接规范路径
    return '/' + stack.join('/');
};