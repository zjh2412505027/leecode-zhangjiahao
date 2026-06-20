/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *     this.val = val;
 *     this.next = next;
 *     this.random = random;
 * }
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    // 1. 第一趟：在原节点后插入拷贝节点
    let cur = head;
    while (cur) {
        const copy = new Node(cur.val);
        copy.next = cur.next;
        cur.next = copy;
        cur = copy.next;
    }

    // 2. 第二趟：设置拷贝节点的 random
    cur = head;
    while (cur) {
        const copy = cur.next;
        if (cur.random) {
            copy.random = cur.random.next;
        }
        cur = copy.next;
    }

    // 3. 第三趟：拆分原链表与拷贝链表
    cur = head;
    const copyHead = head.next;
    let copyCur = copyHead;
    while (cur) {
        cur.next = copyCur.next;
        cur = cur.next;
        if (cur) {
            copyCur.next = cur.next;
            copyCur = copyCur.next;
        }
    }
    return copyHead;
};