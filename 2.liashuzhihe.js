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
    // 虚拟头节点，简化链表创建逻辑
    let dummy = new ListNode(0);
    let cur = dummy;
    // 进位初始为0
    let carry = 0;

    // 只要l1、l2还有节点，或存在进位，就继续循环
    while(l1 !== null || l2 !== null || carry > 0) {
        // 取出当前位数值，空链表则取0
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        // 计算当前位总和
        let sum = val1 + val2 + carry;
        // 更新进位：除以10取整
        carry = Math.floor(sum / 10);
        // 当前位数值：对10取余
        let nodeVal = sum % 10;
        // 创建新节点，接到结果链表后
        cur.next = new ListNode(nodeVal);
        cur = cur.next;
        // 链表后移
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    // 虚拟头的下一个节点是真正的结果起点
    return dummy.next;
};