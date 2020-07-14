/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 

// 双指针法
var maxSlidingWindow = function (nums, k) {
  let len = nums.length;
  let left = 0;
  let right = k - 1;
  let res = [];
  while (right < len) {
    let max = calMax(left, right, nums);
    res.push(max);
    left++;
    right++;
  }
  function calMax(left, right, arr) {
    let max = arr[left];
    for (let i = left; i <= right; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max;
  }
  return res;
};
// @lc code=end
