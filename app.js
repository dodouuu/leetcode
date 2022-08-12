/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const l = nums.length
  let dp = Array(l).fill(-1)
  return recursive(0, nums, dp)
};

// dp[i] = false => jump to i will be impossible to reach the last index
 
function recursive(i, nums, dp) {
  if(i >= nums.length-1 ) return true
  if(dp[i] !== -1) return dp[i]

  for (let j = nums[i]; j>=1; j--) {
    if (recursive(i+j, nums, dp)) return true
  }
  return dp[i] = false
}

const nums = [3, 2, 1, 0, 4]

console.log(canJump(nums))