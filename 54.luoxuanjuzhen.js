/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length === 0) return [];
    const result = [];
    // 定义四个边界
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // 1. 从左到右遍历上边界
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // 上边界收缩

        // 2. 从上到下遍历右边界
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // 右边界收缩

        // 3. 从右到左遍历下边界（需判断top <= bottom，防止重复遍历）
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // 下边界收缩
        }

        // 4. 从下到上遍历左边界（需判断left <= right，防止重复遍历）
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // 左边界收缩
        }
    }
    return result;
};