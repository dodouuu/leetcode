/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length

  let dp = Array(m ).fill().map(() => Array(n ).fill(-1))
  dp[0][0] = grid[0][0]

  recursive(m - 1, n - 1, grid, dp)
  return dp[m-1][n-1]
};

function recursive(m, n, grid, dp) {
  if (dp[m][n] !== -1) return dp[m][n]
  if (m === 0 && n>0) {
    return dp[m][n] = recursive(m, n - 1, grid, dp) + grid[m][n]
  }
  if (n === 0 && m > 0) {
    return dp[m][n] = recursive(m-1, n, grid, dp) + grid[m][n]
  }
  if (m - 1 >= 0 && n - 1 >= 0)
    return dp[m][n] = min(recursive(m, n - 1, grid, dp), recursive(m-1, n, grid, dp)) + grid[m][n]
}
function min (a,b) {
  return a<b ? a : b
}

const grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]

console.log(minPathSum(grid))
