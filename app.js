/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const l = nums.length
  let a = {}
  for (let i = 0; i < l; i++) {
    if (a[nums[i]] === undefined) {
      a[nums[i]]=1
    } else if (a[nums[i]] > 0) {
      a[nums[i]]++
    }
  }
  for (const [key, value] of Object.entries(a)) {
    if(value === 1) {
      return Number(key)
    }
  }
};

const nums = [-1, -1, -2]

singleNumber(nums)
