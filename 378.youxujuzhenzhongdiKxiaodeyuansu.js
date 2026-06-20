/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];

    // 统计矩阵中 <= mid 的元素个数
    const countLess = (mid) => {
        let cnt = 0;
        let row = n - 1, col = 0;
        while(row >= 0 && col < n) {
            if(matrix[row][col] <= mid) {
                cnt += row + 1;
                col++;
            } else {
                row--;
            }
        }
        return cnt;
    };

    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        const cnt = countLess(mid);
        if(cnt < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};