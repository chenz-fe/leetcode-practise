/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
let cache = new Map()
var fib = function(N) {
  if (N === 0) return 0
  if (N === 1) return 1
  if (cache.has(N)) return cache.get(N)
  const result = fib(N - 1) + fib(N - 2)
  cache.set(N, result)
  return result
}
// @lc code=end
