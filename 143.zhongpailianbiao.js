/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    // 1. 快慢指针找链表中点
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 后半段起点
    let mid = slow.next;
    slow.next = null; // 断开前后两段

    // 2. 反转后半段链表
    let prev = null, cur = mid;
    while (cur) {
        const temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    let right = prev; // 反转后的后半段头

    // 3. 交替合并左右两段
    let left = head;
    while (right) {
        const lNext = left.next;
        const rNext = right.next;
        left.next = right;
        right.next = lNext;
        left = lNext;
        right = rNext;
    }
};