/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
        // 1. 构建邻接表和入度数组
    const adj = new Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);

    for (const [a, b] of prerequisites) {
        // 边：b -> a，学习a前必须学b
        adj[b].push(a);
        inDegree[a]++;
    }

    // 2. 初始化队列，加入所有入度为0的节点
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const result = [];
    // 3. 拓扑排序
    while (queue.length > 0) {
        const cur = queue.shift();
        result.push(cur); // 加入拓扑序列

        // 遍历当前课程的所有后继课程
        for (const next of adj[cur]) {
            inDegree[next]--;
            if (inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    // 4. 如果序列长度等于课程数，返回结果；否则返回空数组
    return result.length === numCourses ? result : [];
};