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
var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    const evenHead = even;

    while (even && even.next) {
        // 奇数节点连接下一个奇数
        odd.next = even.next;
        odd = odd.next;
        // 偶数节点连接下一个偶数
        even.next = odd.next;
        even = even.next;
    }
    // 奇数链表末尾拼接偶数链表
    odd.next = evenHead;
    return head;
};