/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  const l = nums.length

  let min = nums[0]
  let max = nums[0]
  let ans = nums[0]
  for (let i = 1; i < l; i++) {
    if (nums[i] < 0) {
      [min, max] = [max, min]
    }
    max = Math.max(nums[i], max * nums[i])
    min = Math.min(nums[i], min * nums[i])
    ans = Math.max(ans, max)
  }
  return ans
};
