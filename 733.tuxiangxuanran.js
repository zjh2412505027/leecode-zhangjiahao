var floodFill = function(image, sr, sc, color) {
    const m = image.length;
    const n = image[0].length;
    const oldColor = image[sr][sc];
    if (oldColor === color) return image;

    const dfs = (i, j) => {
        // 越界 或 颜色不等，终止
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== oldColor) return;
        image[i][j] = color;
        // 四向递归
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    }
    dfs(sr, sc);
    return image;
};