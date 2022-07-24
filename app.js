/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let temp = -1
  const l = nums.length
  // let numOfZero = 0
  // for (let i = 0; i < l; i++) {
  //   if (nums[i] === 0) numOfZero++
  // }
  // if(numOfZero===0) return

  for (let i = 0; i < l; i++) {
    if (nums[i] === 0) {
      for (let j = i + 1; j < l; j++) {
        if (nums[j] !== 0) {
          temp = nums[j]
          nums[j] = nums[i]
          nums[i] = temp
          break
        }
      }
    }
  }
};

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
// console.log('nums=', nums)