/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
/* var inorderTraversal = function (root, arr = []) {
  if (root) {
    inorderTraversal(root.left, arr)
    arr.push(root.val)
    inorderTraversal(root.right, arr)
  }
  return arr

}; */
var inorderTraversal = function (root, arr = []) {
  let result = []
  let stack = []
  let cur = root
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    result.push(cur.val)
    cur = cur.right

  }
  return result

};
// @lc code=end

