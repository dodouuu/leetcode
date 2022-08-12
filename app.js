/**
 * @param {number[]} nums
 * @return {number}
 */
const maxJump = 10001
var jump = function (nums) {
  const l = nums.length
  let dp = Array(l).fill(maxJump)
  recursive(0, 0, nums, dp)
  return dp[l-1]
};
// dp[i] = minimum jumps to reach i-th stair

function recursive(i, jumps, nums, dp) {
  if (dp[i] === false) return false
  if (jumps >= dp[i]) {
    return true
  }
  if (i >= nums.length - 1) {
    dp[i] = Math.min(dp[i], jumps)
    return true
  }

  let hasSolution = false
  for (let j = nums[i]; j >= 1; j--) {
    const result = recursive(i + j, 1 + jumps, nums, dp)

    if (result !== false) {
      dp[i] = Math.min(dp[i], jumps)
      hasSolution = true
    }
  }
  if (hasSolution === false) {
    return dp[i] = false
  } else {
    return true
  }
}

const nums = [5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5]
console.log(jump(nums))