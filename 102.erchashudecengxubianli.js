#include <vector>
#include <queue>
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
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> res;
        if (root == nullptr) return res;

        // 队列存储每层节点
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            // 当前层节点数量
            int levelSize = q.size();
            vector<int> curLevel;

            for (int i = 0; i < levelSize; ++i) {
                TreeNode* node = q.front();
                q.pop();
                curLevel.push_back(node->val);

                // 左子节点入队
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                // 右子节点入队
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
            res.push_back(curLevel);
        }
        return res;
    }
};
