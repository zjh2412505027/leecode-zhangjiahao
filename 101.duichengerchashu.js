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
    // 判断两棵树是否镜像对称
    bool check(TreeNode* l, TreeNode* r) {
        // 两个都为空，对称
        if (!l && !r) return true;
        // 一个空一个非空，不对称
        if (!l || !r) return false;
        // 值相等，且左子树左 和 右子树右 对称；左子树右 和 右子树左 对称
        return l->val == r->val && check(l->left, r->right) && check(l->right, r->left);
    }
public:
    bool isSymmetric(TreeNode* root) {
        return check(root->left, root->right);
    }
};