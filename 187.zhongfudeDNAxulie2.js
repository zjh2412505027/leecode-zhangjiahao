#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        unordered_set<string> seen, repeat;
        int n = s.size();
        // 不足10个字符直接返回空
        for (int i = 0; i <= n - 10; ++i) {
            string sub = s.substr(i, 10);
            if (seen.count(sub)) {
                repeat.insert(sub);
            } else {
                seen.insert(sub);
            }
        }
        return vector<string>(repeat.begin(), repeat.end());
    }
};