var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    const m = matrix.length;
    const n = matrix[0].length;
    // 起点：右上角
    let row = 0;
    let col = n - 1;

    while (row < m && col >= 0) {
        const cur = matrix[row][col];
        if (cur === target) {
            return true;
        } else if (cur > target) {
            // 当前数更大，往左找
            col--;
        } else {
            // 当前数更小，往下找
            row++;
        }
    }
    return false;
};