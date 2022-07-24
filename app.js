/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

  let a={}
  const n = nums.length
  const majority = Math.floor(n/2)
  for(let i=0; i<n; i++) {
    if(a[nums[i]]===undefined) {
      a[nums[i]]=1
      if (a[nums[i]] > majority) return nums[i]
    } else {
      a[nums[i]]++
      if (a[nums[i]] > majority) return nums[i]
    }
  }
}

const nums = [2, 2, 1, 1, 1, 2, 2]

console.log("ans=", majorityElement(nums))
