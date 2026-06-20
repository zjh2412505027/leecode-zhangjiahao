/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    // 1. 边界处理：空图
    if (!node) return null;

    // 哈希表：key=原图节点，value=克隆节点
    const visited = new Map();

    // DFS 递归克隆
    const dfs = (n) => {
        // 如果已经克隆过，直接返回克隆节点
        if (visited.has(n)) {
            return visited.get(n);
        }

        // 2. 创建当前节点的克隆
        const cloneNode = new Node(n.val);
        visited.set(n, cloneNode);

        // 3. 递归克隆所有邻居，并添加到克隆节点的邻居列表
        for (const neighbor of n.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor));
        }

        return cloneNode;
    };

    return dfs(node);
};