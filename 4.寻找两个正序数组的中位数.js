/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let sum = 0;
  let count = nums1.length + nums2.length;
  while (nums1.length + nums2.length) {
    let cur = nums1.pop() || nums2.pop();
    sum += cur
  }
  return sum / count;
};
// @lc code=end

