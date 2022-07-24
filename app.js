/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const l = nums.length
  let k=0
  let a={}
  const max = 101
  for (let i = 0; i < l; i++) {
    if (a[nums[i]] === undefined) {
      a[nums[i]] = 1
      k++
    }
    else {
      nums[i]=max
    }
  }
  nums.sort((a,b)=>a-b)
  return k
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

removeDuplicates(nums)
