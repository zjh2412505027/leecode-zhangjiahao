#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int robRange(vector<int>& nums, int l, int r) {
        int prev2 = 0, prev1 = 0;
        for (int i = l; i <= r; ++i) {
            int curr = max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 1) return nums[0];
        // 两种情况：不取首 / 不取尾
        int case1 = robRange(nums, 1, n - 1);
        int case2 = robRange(nums, 0, n - 2);
        return max(case1, case2);
    }
};