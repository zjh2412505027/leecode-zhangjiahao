/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head);
    let pre = dummy;
    // 1. 走到反转区间的前一个节点
    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }
    let cur = pre.next;
    // 需要头插的次数：right-left 次
    const times = right - left;
    for (let i = 0; i < times; i++) {
        const nextNode = cur.next;
        cur.next = nextNode.next;
        nextNode.next = pre.next;
        pre.next = nextNode;
    }
    return dummy.next;
};