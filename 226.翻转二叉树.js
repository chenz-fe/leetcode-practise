/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
/* var invertTree = function (root) {
  if (root === null) {
    return root
  }
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}; */

var invertTree = function (root) {
  if (root === null) {
    return root
  }
  let stack = [root]
  let cur = null
  while ((cur = stack.shift())) {
    let left = cur.left
    let right = cur.right
    cur.left = right
    cur.right = left
    if (left) {
      stack.push(left)
    }
    if (right) {
      stack.push(right)
    }
  }
  return root

}
// @lc code=end

