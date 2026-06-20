#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_set<int> win;
        for (int i = 0; i < nums.size(); ++i) {
            // 当前数字在窗口内，满足条件
            if (win.count(nums[i])) {
                return true;
            }
            win.insert(nums[i]);
            // 窗口超过k个元素，删除最左边过期值
            if (win.size() > k) {
                win.erase(nums[i - k]);
            }
        }
        return false;
    }
};