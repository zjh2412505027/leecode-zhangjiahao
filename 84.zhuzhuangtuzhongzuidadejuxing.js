/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
    let maxArea = 0;
    // 末尾补0，强制清空栈
    const arr = [...heights, 0];
    for(let i = 0; i < arr.length; i++) {
        // 当前高度小于栈顶高度，弹出计算面积
        while(stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            const curIdx = stack.pop();
            const height = arr[curIdx];
            const left = stack.length ? stack[stack.length - 1] : -1;
            const width = i - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
};