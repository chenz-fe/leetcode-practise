// 环形链表

// 如何判断一个链表是否是环形链表
const hasCycle1 = function (head) {
  let p = head;
  let set = new Set()
  while (p) {
    if (set.has(p)) {
      return true;
    }
    set.add(p);
    p = p.next;
  }
  return false;
}

const hasCycle2 = function (head) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let fast = show = dummyHead;

  while (fast.next && fast.next.next) {
    show = show.next;
    fast = fast.next.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
}

// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
