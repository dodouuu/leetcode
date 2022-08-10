/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const maxM = 101
let dp = Array(maxM).fill().map(() => Array(maxM).fill(0))
dp[1][1] = 1

recursive(100, 100)

var uniquePaths = function (m, n) {
  return dp[m][n]
};

function recursive(m, n) {
  if(m===0 || n===0) return 0
  if (dp[m][n] !== 0) return dp[m][n]
  if(m-1>=0 && n-1>=0)
    return dp[m][n] = recursive(m - 1, n) + recursive(m, n - 1)
}

console.log(uniquePaths(3,7))
