/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let len = s.length;
  // 左右指针
  let i = 0, j = len - 1;
  // 如果指针值相等，则左右指针向中间行进
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  if (isPalindrome(i, j - 1)) {
    return true;
  }
  function isPalindrome(start, end) {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false
      }
      start++;
      end--;
    }
    return true;
  }

  return false;
};

// @lc code=end

