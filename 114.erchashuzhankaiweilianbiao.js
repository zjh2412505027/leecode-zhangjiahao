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
    void flatten(TreeNode* root) {
        TreeNode* cur = root;
        while (cur) {
            // 存在左子树时需要嫁接
            if (cur->left) {
                // 找到左子树最右侧节点
                TreeNode* pre = cur->left;
                while (pre->right) {
                    pre = pre->right;
                }
                // 原右子树接到左子树最右端
                pre->right = cur->right;
                // 左子树移到右侧，左指针置空
                cur->right = cur->left;
                cur->left = nullptr;
            }
            // 处理下一个节点
            cur = cur->right;
        }
    }
};