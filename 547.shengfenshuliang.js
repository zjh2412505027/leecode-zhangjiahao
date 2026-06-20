/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    // 初始化并查集：每个节点的父节点初始为自己
    const parent = new Array(n);
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }

    // 查找根节点（带路径压缩）
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    // 合并两个集合
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    };

    // 遍历矩阵，合并相连的节点
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j] === 1) {
                union(i, j);
            }
        }
    }

    // 统计根节点的数量（连通分量的数量）
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (parent[i] === i) {
            count++;
        }
    }

    return count;
};