#include <vector>
#include <set>
using namespace std;

class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {
        multiset<long long> win; // long long 防止int溢出
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            long long x = nums[i];
            // 找第一个 >= x - valueDiff 的元素
            auto it = win.lower_bound(x - valueDiff);
            // 该元素存在且 <= x + valueDiff，满足数值条件
            if (it != win.end() && *it <= x + valueDiff) {
                return true;
            }
            win.insert(x);
            // 窗口超过 indexDiff，删除左侧过期元素
            if (win.size() > indexDiff) {
                win.erase(win.find(nums[i - indexDiff]));
            }
        }
        return false;
    }
};