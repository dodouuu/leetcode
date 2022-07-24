/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const l = nums.length
  let a = {}
  for (let i = 0; i < l; i++) {
    if (a[nums[i]] === undefined) {
      a[nums[i]] = 1
    } else if (a[nums[i]] === 1) {
      return true
    }
  }
  return false
};

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

containsDuplicate(nums)
