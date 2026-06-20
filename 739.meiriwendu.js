/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const ans = new Array(n).fill(0);
    const stack = []; // 存下标，对应温度单调递减

    for(let i = 0; i < n; i++){
        // 当前温度大于栈顶温度，更新答案
        while(stack.length && temperatures[i] > temperatures[stack.at(-1)]){
            const prevIdx = stack.pop();
            ans[prevIdx] = i - prevIdx;
        }
        stack.push(i);
    }
    return ans;
};