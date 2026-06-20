/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const parent = new Map();
    const ratio = new Map();

    // 查找函数：带路径压缩，并更新节点到根节点的比值
    const find = (x) => {
        if (parent.get(x) !== x) {
            const origParent = parent.get(x);
            // 递归查找父节点的根节点，并更新路径上的比值
            const root = find(parent.get(x));
            // 更新x的父节点直接指向根节点
            parent.set(x, root);
            // 更新x到根节点的比值
            ratio.set(x, ratio.get(x) * ratio.get(origParent));
        }
        return parent.get(x);
    };

    // 2. 构建并查集
    for (let i = 0; i < equations.length; i++) {
        const [A, B] = equations[i];
        const val = values[i];

        // 初始化节点（如果不存在）
        if (!parent.has(A)) {
            parent.set(A, A);
            ratio.set(A, 1.0);
        }
        if (!parent.has(B)) {
            parent.set(B, B);
            ratio.set(B, 1.0);
        }

        const rootA = find(A);
        const rootB = find(B);

        // 合并两个集合：将rootA的父节点设为rootB，并更新比值
        if (rootA !== rootB) {
            parent.set(rootA, rootB);
            // 推导：A/rootA * rootA/rootB = A/B = val → rootA/rootB = val / (A/rootA) = val * (rootA/A)
            ratio.set(rootA, val / ratio.get(A) * ratio.get(B));
        }
    }

    // 3. 处理查询
    const result = [];
    for (const [C, D] of queries) {
        // 情况1：变量不存在
        if (!parent.has(C) || !parent.has(D)) {
            result.push(-1.0);
            continue;
        }

        const rootC = find(C);
        const rootD = find(D);

        // 情况2：变量不连通
        if (rootC !== rootD) {
            result.push(-1.0);
        } else {
            // 情况3：变量连通，结果为C到根的比值 / D到根的比值
            result.push(ratio.get(C) / ratio.get(D));
        }
    }

    return result;
};
