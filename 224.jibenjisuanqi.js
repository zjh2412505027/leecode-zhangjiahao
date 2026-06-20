/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let res = 0;
    let sign = 1; // 1代表正，-1代表负
    let i = 0;
    const n = s.length;
    while(i < n) {
        const c = s[i];
        if(c === ' ') {
            i++;
            continue;
        }
        if(c >= '0' && c <= '9') {
            // 读取完整多位数
            let num = 0;
            while(i < n && s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + Number(s[i]);
                i++;
            }
            res += sign * num;
        } else if(c === '+') {
            sign = 1;
            i++;
        } else if(c === '-') {
            sign = -1;
            i++;
        } else if(c === '(') {
            // 保存括号前的结果和符号
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
            i++;
        } else if(c === ')') {
            // 弹出符号与之前总和
            const preSign = stack.pop();
            const preRes = stack.pop();
            res = preRes + preSign * res;
            i++;
        }
    }
    return res;
};