let arr = [
  { id: 17, types: ['黑', '棕'] },
  { id: 23, types: ['牛皮'] },
  { id: 24, types: ['40', '41', '42'] }
]

let cache = []

function backtrack(list, temp, nums) {
  if (temp.length === nums.length) {
    let obj = Object.assign({}, ...temp)
    if (!cache.includes(JSON.stringify(obj))) {
      cache.push(JSON.stringify(obj))
      return list.push(obj)
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.some(e => e[nums[i].id])) continue
    for (let j = 0; j < nums[i].types.length; j++) {
      let obj = {}
      obj[nums[i].id] = nums[i].types[j]
      temp.push(obj)
      backtrack(list, temp, nums)
      temp.pop()
    }
  }
}

function generateItems(specs) {
  let list = []
  backtrack(list, [], specs)
  return list
}

console.log(generateItems(arr))

