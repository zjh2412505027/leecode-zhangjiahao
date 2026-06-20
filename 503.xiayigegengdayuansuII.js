/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = [];
    // 拼接数组模拟循环
    const arr = [...nums, ...nums];
    for(let i = 0; i < arr.length; i++){
        // 当前数字大于栈顶数字，更新结果
        while(stack.length && arr[i] > arr[stack[stack.length - 1]]){
            const idx = stack.pop();
            if(idx < n) res[idx] = arr[i];
        }
        stack.push(i);
    }
    return res;
};