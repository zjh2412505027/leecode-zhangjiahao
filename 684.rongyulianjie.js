/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    // 节点编号从1到n，所以数组长度设为n+1
    const n = edges.length;
    const parent = new Array(n + 1);
    
    // 初始化：每个节点的父节点是自己
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }

    // 查找根节点（带路径压缩优化）
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    // 遍历所有边
    for (const [u, v] of edges) {
        const rootU = find(u);
        const rootV = find(v);
        if (rootU === rootV) {
            // 两个节点已经连通，这条边就是冗余边
            return [u, v];
        }
        // 合并两个集合
        parent[rootU] = rootV;
    }

    return []; // 题目保证有解，这行代码实际不会执行
};