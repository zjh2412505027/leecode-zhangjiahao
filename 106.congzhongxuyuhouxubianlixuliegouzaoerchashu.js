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
    unordered_map<int, int> inPos;
    vector<int> post;

    // postL/postR：后序区间；inL/inR：中序区间
    TreeNode* dfs(int postL, int postR, int inL, int inR) {
        if (postL > postR) return nullptr;
        // 后序最后一个元素是当前根
        int rootVal = post[postR];
        TreeNode* root = new TreeNode(rootVal);
        int mid = inPos[rootVal];
        // 左子树节点总数
        int leftCnt = mid - inL;

        // 左子树：后序 [postL, postL + leftCnt - 1]，中序 [inL, mid - 1]
        root->left = dfs(postL, postL + leftCnt - 1, inL, mid - 1);
        // 右子树：后序 [postL + leftCnt, postR - 1]，中序 [mid + 1, inR]
        root->right = dfs(postL + leftCnt, postR - 1, mid + 1, inR);
        return root;
    }

public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        post = postorder;
        int n = inorder.size();
        // 建立值到中序下标的映射
        for (int i = 0; i < n; ++i) {
            inPos[inorder[i]] = i;
        }
        return dfs(0, n - 1, 0, n - 1);
    }
};