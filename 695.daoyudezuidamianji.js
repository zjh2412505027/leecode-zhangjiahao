/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    // DFS函数：返回以(i,j)为起点的岛屿面积
    const dfs = (i, j) => {
        // 越界或不是陆地，返回0
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0) {
            return 0;
        }
        // 标记为已访问（沉没），避免重复计算
        grid[i][j] = 0;
        // 递归计算上下左右四个方向的面积之和 + 当前单元格(1)
        return 1 + dfs(i-1, j) + dfs(i+1, j) + dfs(i, j-1) + dfs(i, j+1);
    };

    // 遍历整个矩阵
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                const currentArea = dfs(i, j);
                maxArea = Math.max(maxArea, currentArea);
            }
        }
    }

    return maxArea;
};