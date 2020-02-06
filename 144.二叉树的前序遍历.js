/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
/* var preorderTraversal = function (root, arr = []) {
  if (root) {
    arr.push(root.val)
    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)
  }
  return arr

}; */
var preorderTraversal = function (root, arr = []) {
  let result = []
  let stack = []
  let cur = root
  while (cur || stack.length) {
    while (cur) {
      result.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return result

};
// @lc code=end

