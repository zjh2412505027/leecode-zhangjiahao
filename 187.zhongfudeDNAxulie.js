#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        unordered_set<string> seen;    // 存储已经遍历过的10长度子串
        unordered_set<string> repeat;   // 存储重复出现的子串（自动去重）
        vector<string> ans;
        int n = s.size();
        // 字符串长度不足10，不可能存在符合条件子串
        if (n < 10) return ans;

        // 枚举所有长度为10的子串起点
        for (int i = 0; i <= n - 10; ++i) {
            string sub = s.substr(i, 10);
            if (seen.count(sub)) {
                // 该子串之前出现过，加入结果集合
                repeat.insert(sub);
            } else {
                seen.insert(sub);
            }
        }
        // 把去重后的结果转为vector返回
        for (const string& str : repeat) {
            ans.push_back(str);
        }
        return ans;
    }
};