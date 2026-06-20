#include <unordered_map>
#include <vector>
using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    unordered_map<int, int> inIndex;
    vector<int> pre;

    // preL preR: 当前前序数组区间 [左,右]
    // inL inR: 当前中序数组区间 [左,右]
    TreeNode* dfs(int preL, int preR, int inL, int inR) {
        if (preL > preR) return nullptr;
        // 前序区间第一个元素为根
        int rootVal = pre[preL];
        TreeNode* root = new TreeNode(rootVal);
        // 根在中序的位置
        int mid = inIndex[rootVal];
        // 左子树节点总数
        int leftCnt = mid - inL;

        // 左子树：前序[preL+1, preL+leftCnt] 中序[inL, mid-1]
        root->left = dfs(preL + 1, preL + leftCnt, inL, mid - 1);
        // 右子树：前序[preL+leftCnt+1, preR] 中序[mid+1, inR]
        root->right = dfs(preL + leftCnt + 1, preR, mid + 1, inR);
        return root;
    }

public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        pre = preorder;
        int n = preorder.size();
        // 建立值到中序下标的映射
        for (int i = 0; i < n; i++) {
            inIndex[inorder[i]] = i;
        }
        return dfs(0, n - 1, 0, n - 1);
    }
};