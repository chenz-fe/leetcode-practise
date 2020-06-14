/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   let [cur, prev] = [head, null];
//   while (cur !== null) {
//     // [cur.next, prev, cur] = [prev, cur, cur.next]
//     let next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }
//   return prev;
// }

var reverseList = function (head) {
  let reverse = function (prev, cur) {
    if (!cur) {
      return prev;
    }
    let next = cur.next;
    cur.next = prev;
    return reverse(cur, next);
  }
  return reverse(null, head);
}

// @lc code=end

