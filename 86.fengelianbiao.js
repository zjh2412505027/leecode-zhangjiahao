/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // 两个虚拟头，分别存小于x、大于等于x的节点
    const smallDummy = new ListNode(0);
    const largeDummy = new ListNode(0);
    let small = smallDummy;
    let large = largeDummy;
    let cur = head;

    while(cur) {
        if(cur.val < x) {
            small.next = cur;
            small = small.next;
        } else {
            large.next = cur;
            large = large.next;
        }
        cur = cur.next;
    }
    // 切断大链表末尾，避免循环
    large.next = null;
    // 小链表末尾接上大链表头部
    small.next = largeDummy.next;
    return smallDummy.next;
};