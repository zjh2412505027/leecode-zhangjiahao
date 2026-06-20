/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    // 1. 构建邻接表（节点从1开始编号）
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of times) {
        adj[u].push([v, w]);
    }

    // 2. 初始化距离数组
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;

    // 3. Dijkstra 算法（用数组模拟优先队列，适合本题数据规模）
    const visited = new Array(n + 1).fill(false);
    for (let i = 0; i < n; i++) {
        // 找到当前未访问的距离最小的节点
        let minDist = Infinity;
        let u = -1;
        for (let j = 1; j <= n; j++) {
            if (!visited[j] && dist[j] < minDist) {
                minDist = dist[j];
                u = j;
            }
        }

        if (u === -1) break; // 所有可达节点已处理完
        visited[u] = true;

        // 松弛所有邻接边
        for (const [v, w] of adj[u]) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
            }
        }
    }

    // 4. 检查所有节点的最短距离，求最大值
    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1;
        maxTime = Math.max(maxTime, dist[i]);
    }
    return maxTime;
};