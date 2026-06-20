#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    int numDecodings(string s) {
        int n = s.size();
        vector<int> dp(n + 1, 0);
        dp[0] = 1; // 空串基准
        
        // 第一个字符
        dp[1] = (s[0] == '0') ? 0 : 1;
        
        for (int i = 2; i <= n; ++i) {
            // 取当前单个数字
            int one = s[i-1] - '0';
            if (one != 0)
                dp[i] += dp[i-1];
            
            // 取前两位组成数字
            int two = (s[i-2] - '0') * 10 + one;
            if (two >= 10 && two <= 26)
                dp[i] += dp[i-2];
        }
        return dp[n];
    }
};