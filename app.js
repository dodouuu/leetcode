/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {

  const l = arr.length
  let dp = Array(l).fill(-1)
  let visited = Array(l).fill(false)
  return recursive(start, arr, dp, visited)
};

function recursive(i, arr, dp, visited) {

  if (visited[i] === false) {
    visited[i] = true
  } else {
    return false
  }
  
  if (i >= arr.length || i < 0) return false

  if (arr[i] === 0) {
    return true
  }

  if (dp[i] !== -1) return dp[i]

  if (recursive(i + arr[i], arr, dp, visited) ||
    recursive(i - arr[i], arr, dp, visited) ) return true

  return dp[i] = false
}

const arr = [3, 0, 2, 1, 2]
const start = 2
console.log(canReach(arr, start))