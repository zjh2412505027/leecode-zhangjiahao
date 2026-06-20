/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 虚拟头节点
    const dummy = new ListNode(0, head);
    // pre：每组的前驱节点
    let pre = dummy;

    while (true) {
        // 1. 找到本组尾节点，判断是否够k个
        let tail = pre;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (!tail) return dummy.next; // 剩余不足k个，直接返回
        }
        // 保存下一组起点
        const nextGroupHead = tail.next;
        // 本组头节点
        let curr = pre.next;
        let prev = nextGroupHead; // 翻转后本组尾要接下一组

        // 2. 翻转k个节点
        while (curr !== nextGroupHead) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // 3. 拼接：pre连接翻转后的组头（tail），更新pre为原组头（现在是本组尾）
        const oldHead = pre.next;
        pre.next = tail;
        pre = oldHead;
    }
};