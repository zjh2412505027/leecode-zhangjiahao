/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head; // 空链表特殊处理
    let cur = head;
    while (cur.next) {
        if (cur.val === cur.next.val) {
            // 重复，删除后一个节点
            cur.next = cur.next.next;
        } else {
            // 不重复，指针后移
            cur = cur.next;
        }
    }
    return head;
};