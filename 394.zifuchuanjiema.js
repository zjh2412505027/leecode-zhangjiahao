/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const numStack = [];
    const strStack = [];
    let currentStr = "";
    let currentNum = 0;

    for(const c of s) {
        if(!isNaN(Number(c))) {
            // 拼接多位数
            currentNum = currentNum * 10 + Number(c);
        } else if(c === '[') {
            // 入栈保存状态
            numStack.push(currentNum);
            strStack.push(currentStr);
            currentNum = 0;
            currentStr = "";
        } else if(c === ']') {
            // 出栈重复
            const repeat = numStack.pop();
            const preStr = strStack.pop();
            currentStr = preStr + currentStr.repeat(repeat);
        } else {
            // 小写字母
            currentStr += c;
        }
    }
    return currentStr;
};