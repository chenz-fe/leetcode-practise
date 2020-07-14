/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
// 例如，给定一个列表 
// temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
// 你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]
var dailyTemperatures = function (T) {
  const len = T.length // 缓存数组的长度 
  const stack = [] // 初始化一个栈   
  const res = (new Array(len)).fill(0) //  初始化结果数组，注意数组定长，占位为0
  for (let i = 0; i < len; i++) {
    // 若栈不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop()
      // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
      res[top] = i - top
    }
    // 栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i)
  }
  // 返回结果数组
  return res
};

// cur   73, 74, 75, 71, 69, 72,76,73
// stack 6,7
// res   1, 1,4,2,1,1,0,0

// var dailyTemperatures = function (T) {
//   const len = T.length;
//   let stack = [];
//   let res = new Array(len).fill(0);
//   for (let i = 0; i < len; i++) {
//     while (stack.length && T[i] > T[stack[stack.length - 1]]) {
//       let top = stack.pop();
//       res[top] = i - top
//     }
//     stack.push(i)
//   }
//   return res;
// }

// @lc code=end