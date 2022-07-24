/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = -1
  while (left <= right) {
    mid = Math.floor( (left + right) / 2 )

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      break
    }
  }
  if(nums[mid] > target) return mid
  else if (nums[mid] < target) return mid+1
  else return mid
}

const nums = [1, 3, 5, 6]
const target = 4

console.log("ans=",searchInsert(nums, target))
