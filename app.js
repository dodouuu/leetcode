/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let ans = []

var findMode = function (root) {
  ans = []
  const array = dfs(root, undefined)
  const l = array. length

  let duplicates = {}
  for(let i=0; i<l; i++) {
    if (duplicates[array[i]] === undefined) {
      duplicates[array[i]] = {} // 先初始化
      duplicates[array[i]].times = 0 
      duplicates[array[i]].value = array[i]
    } else {
      duplicates[array[i]].times++ // 已經非 undefined，可++
    }
  }
  let max = 0
  for (var key of Object.keys(duplicates)) {
    if (duplicates[key].times > max) max = duplicates[key].times
  }

  for (var key of Object.keys(duplicates)) {
    if (duplicates[key].times === max) ans.push(duplicates[key].value)
  }

  return ans
}
// 先把所有 nodes 裝進一個 array
// 再分析 array 當中 duplicates[key].times 最大值
// 再把 duplicates[key].value 裝進 ans

function dfs(node) {
  if (!node.left && !node.right) {
    let array = []
    array.push(node.val)
    return array
  }

  let arrayLeft = []
  let arrayRight = []

  if (node.left) {
    arrayLeft = dfs(node.left)
    arrayLeft.push(node.val)
  }

  if (node.right) {
    arrayRight = dfs(node.right)
    if (arrayLeft.length === 0) {
      arrayRight.unshift(node.val)
    }
    arrayLeft = arrayLeft.concat(arrayRight)
  }

  return arrayLeft
}


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// let node3 = new TreeNode(5)

let node2 = new TreeNode(5)

let node1 = new TreeNode(4)


let left = new TreeNode(2, node1)
let right = new TreeNode(3, undefined, node2)

let root = new TreeNode(1, left, right)

// console.log(left)
// console.log(right)
console.log(root)

const start = new Date().getTime();

// console.log(zigzagLevelOrder(root))

const end = new Date().getTime();
console.log('time=', end - start)
