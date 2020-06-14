/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function (head, m, n) {
  let count = n - m;
  let p = dummyHead = new ListNode();

  let cur, pre, front, tail;
  p.next = head;
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  front = p;
  pre = tail = p.next;
  cur = pre.next;
  for (let i = 0; i < count; i++) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  front.next = pre;
  tail.next = cur;
  return dummyHead.next;
}

// var reverseBetween = function (head, m, n) {
//   let count = n - m;
//   let p = dummyHead = new ListNode();
//   let pre, cur, front, tail;
//   p.next = head;
//   for (let i = 0; i < m - 1; i++) {
//     p = p.next;
//   }
//   // 保存前节点
//   front = p; //1
//   // 同时保存区间首节点
//   pre = tail = p.next; //2
//   cur = pre.next;//3
//   // 区间反转
//   // i=0   1->2<-3pre->4cur->5->NULL
//   // i=1   1->2<-3pre<-4pre->5cur->NULL
//   for (let i = 0; i < count; i++) {
//     let next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
//   // 前节点的 next 指向区间末尾
//   front.next = pre;
//   // 区间首节点的 next 指向后节点(循环完后的cur就是区间后面第一个节点，即后节点)
//   tail.next = cur;
//   return dummyHead.next;
// };

// @lc code=end

