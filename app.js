/**
 * @param {number} n
 * @return {number}
 */
let dp = Array(102).fill(0)
let nums = Array(102).fill(-1)
nums[0] = 0
nums[1] = 1

for(let i=1; i<= Math.floor(100/2); i++) {
  nums[i*2] = nums[i]
  nums[i*2+1] = nums[i] + nums[i+1]
}
for(let i=1; i<=100; i++) {
  if (nums[i] > dp[i - 1]) dp[i] = nums[i]
  else dp[i] = dp[i-1]
}
var getMaximumGenerated = function (n) {
  return dp[n]
};