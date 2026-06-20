#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
        vector<int> res;
        if (n == 1) {
            res.push_back(0);
            return res;
        }

        // 1. 构建邻接表 & 度数数组
        vector<vector<int>> adj(n);
        vector<int> degree(n, 0);
        for (auto& e : edges) {
            int a = e[0], b = e[1];
            adj[a].push_back(b);
            adj[b].push_back(a);
            degree[a]++;
            degree[b]++;
        }

        // 2. 初始叶子节点(度数=1)入队
        queue<int> q;
        for (int i = 0; i < n; ++i) {
            if (degree[i] == 1) q.push(i);
        }

        int remain = n;
        // 只剩1/2个节点时停止，就是答案
        while (remain > 2) {
            int sz = q.size();
            remain -= sz;
            // 批量删除当前层所有叶子
            for (int i = 0; i < sz; ++i) {
                int cur = q.front();
                q.pop();
                // 遍历相邻节点，度数-1
                for (int neighbor : adj[cur]) {
                    degree[neighbor]--;
                    if (degree[neighbor] == 1) {
                        q.push(neighbor);
                    }
                }
            }
        }

        // 队列剩余节点即为最小高度树根
        while (!q.empty()) {
            res.push_back(q.front());
            q.pop();
        }
        return res;
    }
};