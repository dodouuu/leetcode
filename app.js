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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {

  if (!root.left && !root.right) {
    return 0 // root is not a left child
  }
  return bfs(root)
}
// 多用一個 queue 記憶目前的 node 是不是 left child
function bfs(node) {
  let queue = []
  queue.push(node)

  let isLeaf = 2
  let isLeftLeaves = []
  isLeftLeaves.push(false) // root is not a left child

  let sum = 0
  let checkLeft = undefined

  while (queue.length) {
    let q = queue.length
    while (q--) {
      node = queue.shift()
      checkLeft = isLeftLeaves.shift()

      isLeaf = 2

      if (node.left) {
        queue.push(node.left)
        isLeaf--
        isLeftLeaves.push(true)
      }

      if (node.right) {
        queue.push(node.right)
        isLeaf--
        isLeftLeaves.push(false)
      }

      if (isLeaf === 2 && checkLeft === true) {
        sum += node.val
      }
    }
  }

  return sum
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

console.log(zigzagLevelOrder(root))

const end = new Date().getTime();
console.log('time=', end - start)
