/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */
const maxNum = 50
let gcdArray = Array(maxNum + 1).fill().map(() => Array(maxNum + 1));
genGCD()

let adj = {}
let ans = []
let depths = []

var getCoprimes = function (nums, edges) {
  if (nums.length === 1) return [-1]
  genAdj(edges)

  let visited = new Array(nums.length).fill(false)
  let ans = new Array(nums.length).fill(0)
  let depths = Array.from(Array(maxNum + 1), () => new Array())
  let ancestors = []

  visited[0] = true
  const level = 0
  const index = 0
  dfs(index, level, depths, ans, ancestors, adj, nums, visited)
  return ans
}

function dfs(index, level, depths, ans, ancestors, adj, nums, visited) {
  let findIndex = -1
  for (let i = 1; i <= maxNum; i++) {
    if (depths[i].length > 0 && gcdArray[i][nums[index]] === 1) {
      const last = depths[i].length - 1
      findIndex = Math.max(findIndex, depths[i][last])
    }
  }
  ans[index] = (findIndex === -1) ? -1 : ancestors[findIndex]

  ancestors.push(index)
  depths[nums[index]].push(level)

  const l = adj[index].length
  for (let i = 0; i < l; i++) {
    if (visited[adj[index][i]] === true) continue

    visited[adj[index][i]] = true
    dfs(adj[index][i], level+1, depths, ans, ancestors, adj, nums, visited)
    visited[adj[index][i]] = false
  }

  ancestors.pop()
  depths[nums[index]].pop()
}

function genGCD() {
  for (let i = 1; i <= maxNum; i++) {
    let j = i
    gcdArray[i][j] = j
    gcdArray[j][i] = j
    for (j = i + 1; j <= maxNum; j++) {
      const temp = gcd(i, j)
      gcdArray[i][j] = temp
      gcdArray[j][i] = temp
    }
  }
}
function gcd(a, b) {
  if (b) {
    return gcd(b, a % b);
  } else {
    return Math.abs(a);
  }
}
function genAdj(edges) {
  const l = edges.length
  adj = {}
  for (let i = 0; i < l; i++) {
    if (adj[edges[i][0]] === undefined) {
      adj[edges[i][0]] = [] // 先創建空 array
      adj[edges[i][0]].push(edges[i][1]) // 再 push
    } else {
      adj[edges[i][0]].push(edges[i][1]) // array 已經非 undefined，可直接 push
    }
    if (adj[edges[i][1]] === undefined) {
      adj[edges[i][1]] = [] // 先創建空 array
      adj[edges[i][1]].push(edges[i][0]) // 再 push
    } else {
      adj[edges[i][1]].push(edges[i][0]) // array 已經非 undefined，可直接 push
    }
  }
}


const nums = [2, 3, 3, 2], edges = [[0, 1], [1, 2], [1, 3]]

console.log('getCoprimes(nums, edges)=', getCoprimes(nums, edges))