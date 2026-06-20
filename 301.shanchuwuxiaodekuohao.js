#include <vector>
#include <string>
#include <queue>
#include <unordered_set>
using namespace std;

class Solution {
private:
    // 判断字符串括号是否合法
    bool isValid(const string& str) {
        int cnt = 0;
        for (char c : str) {
            if (c == '(') cnt++;
            else if (c == ')') cnt--;
            // 右括号多于左括号，直接非法
            if (cnt < 0) return false;
        }
        return cnt == 0;
    }

public:
    vector<string> removeInvalidParentheses(string s) {
        vector<string> res;
        queue<string> q;
        unordered_set<string> visited; // 去重，避免重复处理相同字符串

        q.push(s);
        visited.insert(s);
        bool foundValid = false;

        while (!q.empty()) {
            int levelSize = q.size();
            // 遍历当前层所有字符串（当前层代表删除相同数量括号）
            for (int i = 0; i < levelSize; ++i) {
                string cur = q.front();
                q.pop();

                if (isValid(cur)) {
                    res.push_back(cur);
                    foundValid = true;
                }
                // 本层已经找到合法串，不再生成下一层（保证删除最少括号）
                if (foundValid) continue;

                // 依次删除每一个括号字符，生成新串
                for (int j = 0; j < cur.size(); ++j) {
                    char ch = cur[j];
                    if (ch != '(' && ch != ')') continue; // 字母不删除
                    string nextStr = cur.substr(0, j) + cur.substr(j + 1);
                    if (!visited.count(nextStr)) {
                        visited.insert(nextStr);
                        q.push(nextStr);
                    }
                }
            }
            // 当前层存在合法字符串，直接返回结果（BFS保证删除次数最少）
            if (foundValid) break;
        }
        return res;
    }
};