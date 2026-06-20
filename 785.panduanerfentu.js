/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    // 0:未染色，1、-1 两种颜色
    const color = new Array(n).fill(0);
    
    for(let i = 0; i < n; i++) {
        // 当前节点未染色，开始BFS
        if(color[i] === 0) {
            const queue = [i];
            color[i] = 1;
            while(queue.length) {
                const cur = queue.shift();
                // 遍历所有邻接点
                for(const neighbor of graph[cur]) {
                    if(color[neighbor] === 0) {
                        // 染相反颜色
                        color[neighbor] = -color[cur];
                        queue.push(neighbor);
                    } else if(color[neighbor] === color[cur]) {
                        // 邻接点同色，存在奇环，不是二分图
                        return false;
                    }
                }
            }
        }
    }
    return true;
};