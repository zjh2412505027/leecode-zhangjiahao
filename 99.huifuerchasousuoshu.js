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
    TreeNode* pre = nullptr;
    TreeNode* first = nullptr;
    TreeNode* second = nullptr;

    // 中序遍历
    void inorder(TreeNode* cur) {
        if (!cur) return;
        inorder(cur->left);

        // 发现逆序：前一个节点值 > 当前节点值
        if (pre && pre->val > cur->val) {
            if (!first) {
                first = pre;  // 第一个出错点
            }
            second = cur;     // 第二个出错点（相邻/不相邻都适用）
        }
        pre = cur;

        inorder(cur->right);
    }

public:
    void recoverTree(TreeNode* root) {
        inorder(root);
        // 交换两个错误节点的值
        swap(first->val, second->val);
    }
};