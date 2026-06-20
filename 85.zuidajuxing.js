/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return 0;
    const cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let maxArea = 0;

    // 复用84题单调栈：求柱状图最大矩形面积
    const largestRect = (h) => {
        const stack = [];
        let res = 0;
        const arr = [...h, 0];
        for(let i = 0; i < arr.length; i++) {
            while(stack.length && arr[i] < arr[stack.at(-1)]) {
                const idx = stack.pop();
                const height = arr[idx];
                const left = stack.length ? stack.at(-1) : -1;
                const width = i - left - 1;
                res = Math.max(res, height * width);
            }
            stack.push(i);
        }
        return res;
    }

    // 逐行更新高度数组并计算面积
    for(const row of matrix) {
        for(let j = 0; j < cols; j++) {
            heights[j] = row[j] === "1" ? heights[j] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRect(heights));
    }
    return maxArea;
};