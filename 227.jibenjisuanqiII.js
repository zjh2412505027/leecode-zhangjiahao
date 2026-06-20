/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // 第一步：删掉全部空格，彻底解决末尾空格bug
    const str = s.replace(/ /g, "");
    const stack = [];
    let num = 0;
    let preOp = '+';
    const len = str.length;

    for(let i = 0; i < len; i++){
        const c = str[i];
        // 拼接多位数
        if(!isNaN(Number(c))){
            num = num * 10 + Number(c);
        }
        // 遇到运算符 或 走到最后一位，触发计算
        if(['+','-','*','/'].includes(c) || i === len - 1){
            switch(preOp){
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    let top = stack.pop();
                    stack.push(Math.trunc(top / num));
                    break;
            }
            preOp = c;
            num = 0;
        }
    }
    return stack.reduce((sum, item) => sum + item, 0);
};