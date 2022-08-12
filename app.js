/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const l = nums.length

  let negNums = []
  let posNums = []
  let hasZero = false
  let ans = undefined

  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) posNums.push(nums[i])
    if (nums[i] < 0) negNums.push(nums[i])
  }

  posNums.sort(compare)
  negNums.sort(compare)

  const posLen = posNums.length
  const negLen = negNums.length
  if (l - posLen - negLen) hasZero = true

  if (negLen >= 2) {
    if (posLen >= 1 && posLen < 3) {
      ans = negNums[0] * negNums[1] * posNums[posLen - 1]
    } else if (posLen >= 3) {
      ans = Math.max(negNums[0] * negNums[1] * posNums[posLen - 1], posNums[posLen - 1] * posNums[posLen - 2] * posNums[posLen - 3])
    } else if (hasZero){
      ans = 0
    } else {
      ans = negNums[negLen - 1] * negNums[negLen - 2] * negNums[negLen - 3]
    }
  } else {
    if (posLen >= 3) {
      ans = posNums[posLen - 1] * posNums[posLen - 2] * posNums[posLen - 3]
    } else if (hasZero) {
      ans = 0
    } else {
      ans = posNums[0] * posNums[1] * negNums[0]
    }
  }

  return ans
};

function compare(a, b) {
  return a - b
}

const nums = [-710, -107, -851, 657, -14, -859, 278, -182, -749, 718, -640, 127, -930, -462, 694, 969, 143, 309, 904, -651, 160, 451, -159, -316, 844, -60, 611, -169, -73, 721, -902, 338, -20, -890, -819, -644, 107, 404, 150, -219, 459, -324, -385, -118, -307, 993, 202, -147, 62, -94, -976, -329, 689, 870, 532, -686, 371, -850, -186, 87, 878, 989, -822, -350, -948, -412, 161, -88, -509, 836, -207, -60, 771, 516, -287, -366, -512, 509, 904, -459, 683, -563, -766, -837, -333, 93, 893, 303, 908, 532, -206, 990, 280, 826, -13, 115, -732, 525, -939, -787]
console.log(maximumProduct(nums))