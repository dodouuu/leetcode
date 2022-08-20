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
 * @return {number[][]}
 */
const maxLength = 1000
const empty = -2
var zigzagLevelOrder = function (root) {

  let ans = Array.from(Array(maxLength), () => new Array())
  if (!root) return ans[0]

  let queue = []
  let parentLevel = []
  queue.push(root)
  parentLevel.push(-1)

  while (queue.length) {
    let parent = parentLevel.shift()

    if (parent !== empty) {
      const node = queue.shift()

      if ((parent + 1) % 2 === 1) {
        ans[parent + 1].unshift(node.val)
      } else { // (parent + 1)%2 === 0
        ans[parent + 1].push(node.val)
      }

      if (node.left) {
        queue.push(node.left)
        parentLevel.push(parent + 1)

      } else {
        parentLevel.push(empty)
      }

      if (node.right) {
        queue.push(node.right)
        parentLevel.push(parent + 1)

      } else {
        parentLevel.push(empty)
      }
    }
  }

  countAnsLength(ans)
  return ans
}

function countAnsLength(ans) {
  let l = 0
  for (let i = 0; i < maxLength; i++) {
    if (ans[i].length > 0) l = i
  }
  ans.length = l + 1
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
