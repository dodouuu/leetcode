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
var minDepth = function (root) {

  if (!root) return 0
  return bfs(root)
}

function bfs(node) {
  let queue = []
  queue.push(node)
  let depth = 0

  let isLeaf = 2

  while (queue.length) {
    let q = queue.length
    while (q--) {
      node = queue.shift()

      isLeaf = 2

      if (node.left) {
        queue.push(node.left)
        isLeaf--
      }

      if (node.right) {
        queue.push(node.right)
        isLeaf--
      }

      if (isLeaf===2) return depth+1
    }
    depth++
  }

  return depth
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
