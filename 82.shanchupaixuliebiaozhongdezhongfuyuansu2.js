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
    // 虚拟头节点
    const dummy = new ListNode(0, head);
    let cur = dummy;

    while (cur.next && cur.next.next) {
        // 发现重复
        if (cur.next.val === cur.next.next.val) {
            const repeatVal = cur.next.val;
            // 删除所有等于重复值的节点
            while (cur.next && cur.next.val === repeatVal) {
                cur.next = cur.next.next;
            }
        } else {
            // 当前下一个节点无重复，移动cur
            cur = cur.next;
        }
    }
    return dummy.next;
};