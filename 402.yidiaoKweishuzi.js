/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    // 单调递增栈
    for (const c of num) {
        while (stack.length > 0 && stack[stack.length - 1] > c && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(c);
    }
    // 剩余k从末尾截去
    if (k > 0) stack.splice(stack.length - k, k);
    // 去除前导零
    let res = stack.join('').replace(/^0+/, '');
    // 空则返回"0"
    return res === '' ? '0' : res;
};