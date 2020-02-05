/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathMap = {
    '.': stack => stack,
    '': stack => stack,
    '..': stack => {
      stack.pop()
      return stack
    }
  }
  let paths = path.split('/')
  let stack = []
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i]
    if (pathMap.hasOwnProperty(p)) {
      stack = pathMap[p](stack)
    } else {
      stack.push(p)
    }
  }
  return '/' + stack.join('/')
};

// @lc code=end

