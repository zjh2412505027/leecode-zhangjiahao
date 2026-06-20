/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
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
    TreeNode* sortedListToBST(ListNode* head) {
        // 空链表
        if (!head) return nullptr;
        // 只有一个节点
        if (!head->next) return new TreeNode(head->val);

        // 快慢指针找中点，pre记录中点前一个节点
        ListNode* slow = head;
        ListNode* fast = head;
        ListNode* pre = nullptr;
        while (fast && fast->next) {
            pre = slow;
            slow = slow->next;
            fast = fast->next->next;
        }

        // slow是中点，作为根节点
        TreeNode* root = new TreeNode(slow->val);
        // 断开左侧链表，分割左右区间
        pre->next = nullptr;
        // 左子树：head ~ pre
        root->left = sortedListToBST(head);
        // 右子树：slow->next 往后
        root->right = sortedListToBST(slow->next);
        return root;
    }
};