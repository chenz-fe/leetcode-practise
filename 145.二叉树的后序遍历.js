/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var postorderTraversal = function (root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr)
    postorderTraversal(root.right, arr)
    arr.push(root.val)
  }
  return arr
}; */
var postorderTraversal = function (root, arr = []) {
  let result = []
  let stack = []
  let cur = root
  let last = null
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack[stack.length - 1]
    if (!cur.right || cur.right === last) {
      cur = stack.pop()
      result.push(cur.val)
      last = cur
      cur = null
    } else {
      cur = cur.right
    }

  }
  return result
};
// @lc code=end

