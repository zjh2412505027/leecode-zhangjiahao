var generateMatrix = function(n) {
    const res = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let cur = 1;
    const max = n * n;

    while (cur <= max) {
        // 左→右 顶行
        for (let i = left; i <= right; i++) {
            res[top][i] = cur++;
        }
        top++;
        if (cur > max) break;

        // 上→下 右列
        for (let i = top; i <= bottom; i++) {
            res[i][right] = cur++;
        }
        right--;
        if (cur > max) break;

        // 右→左 底行
        for (let i = right; i >= left; i--) {
            res[bottom][i] = cur++;
        }
        bottom--;
        if (cur > max) break;

        // 下→上 左列
        for (let i = bottom; i >= top; i--) {
            res[i][left] = cur++;
        }
        left++;
    }
    return res;
};