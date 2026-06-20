#include <vector>
#include <string>
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
    void dfs(TreeNode* node, string path, vector<string>& res) {
        if (!node) return;
        // 拼接当前节点值
        path += to_string(node->val);
        // 到达叶子节点，存入结果
        if (!node->left && !node->right) {
            res.push_back(path);
            return;
        }
        // 左右子树继续递归，拼接箭头
        dfs(node->left, path + "->", res);
        dfs(node->right, path + "->", res);
    }
public:
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> ans;
        dfs(root, "", ans);
        return ans;
    }
};