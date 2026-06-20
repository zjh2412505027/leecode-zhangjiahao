/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];
    // 入栈，高位在栈底，低位在栈顶
    let cur = l1;
    while(cur) {
        stack1.push(cur.val);
        cur = cur.next;
    }
    cur = l2;
    while(cur) {
        stack2.push(cur.val);
        cur = cur.next;
    }

    let carry = 0;
    let resHead = null;
    // 弹出低位依次相加
    while(stack1.length || stack2.length || carry) {
        const a = stack1.length ? stack1.pop() : 0;
        const b = stack2.length ? stack2.pop() : 0;
        const sum = a + b + carry;
        carry = Math.floor(sum / 10);
        const newNode = new ListNode(sum % 10);
        // 头插法，新节点作为新头
        newNode.next = resHead;
        resHead = newNode;
    }
    return resHead;
};