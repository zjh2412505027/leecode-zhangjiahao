/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftStack = [];  // 存左括号下标
    let starStack = [];  // 存星号下标
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(c === '('){
            leftStack.push(i);
        }else if(c === '*'){
            starStack.push(i);
        }else{
            // 遇到右括号，优先匹配左括号
            if(leftStack.length) leftStack.pop();
            else if(starStack.length) starStack.pop();
            else return false; // 无左括号也无星号，直接无效
        }
    }
    // 剩余左括号，用星号当右括号抵消，要求星号下标 > 左括号下标
    while(leftStack.length && starStack.length){
        if(leftStack.pop() > starStack.pop()) return false;
    }
    // 左括号全部抵消完才合法
    return leftStack.length === 0;
};