#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> pos;
        int maxLen = 0, left = 0;
        for (int right = 0; right < s.size(); right++) {
            char c = s[right];
            if (pos.count(c) && pos[c] >= left) {
                left = pos[c] + 1;
            }
            pos[c] = right;
            maxLen = max(maxLen, right - left + 1);
        }
        return maxLen;
    }
};


