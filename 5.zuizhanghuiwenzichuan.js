#include <string>
using namespace std;

class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.size();
        if (n <= 1) return s;
        int maxLen = 1;
        int start = 0;

        // 中心扩散函数，返回当前中心能扩展出的最大回文长度
        auto expand = [&](int l, int r) -> int {
            while (l >= 0 && r < n && s[l] == s[r]) {
                l--;
                r++;
            }
            return r - l - 1;
        };

        for (int i = 0; i < n; i++) {
            int len1 = expand(i, i);    // 奇数长度
            int len2 = expand(i, i+1);  // 偶数长度
            int curMax = max(len1, len2);
            if (curMax > maxLen) {
                maxLen = curMax;
                start = i - (curMax - 1) / 2;
            }
        }
        return s.substr(start, maxLen);
    }
};