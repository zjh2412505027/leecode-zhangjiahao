/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
      // 1. 构建邻接表和入度数组
    const adj = new Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);
    
    for (const [a, b] of prerequisites) {
        // b -> a，学习a需要先学b
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

    // 3. 拓扑排序
    let count = 0;
    while (queue.length > 0) {
        const cur = queue.shift();
        count++; // 统计已完成的课程数

        // 遍历当前课程的所有后继课程
        for (const next of adj[cur]) {
            inDegree[next]--;
            // 如果后继课程的入度变为0，加入队列
            if (inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    // 4. 已完成的课程数等于总课程数，说明无环
    return count === numCourses;  
};