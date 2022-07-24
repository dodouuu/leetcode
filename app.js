/**
 * @param {number[]} prices
 * @return {number}
 */
const MAX = 100001
var maxProfit = function (prices) {
  const l = prices.length
  let maxP = 0
  let max = new Array(l).fill(0)
  let tempMax = 0

  let min = new Array(l).fill(0)
  let tempMin = MAX

  for (let i = l-1; i >=0; i--) {
    if(prices[i] > tempMax) {
      tempMax = prices[i]
    }
    max[i] = tempMax
  }
  // console.log('max=', max)

  for (let i = 0; i < l; i++) {
    if(prices[i] < tempMin) {
      tempMin = prices[i]
    }
    min[i] = tempMin
  }
  // console.log('min=', min)

  for(let i=0; i<l; i++) {
    if (max[i] - min[i] < maxP) break
    for(let j=i+1; j<l; j++) {
      if (max[j] - min[j] <= maxP) break
      const dif = prices[j] - prices[i]
      if(dif>maxP) maxP = dif
    }
  }
  return maxP
};

const prices = [7, 1, 5, 3, 6, 4]
// const prices = [7, 6, 4, 3, 1]

console.log("ans=", maxProfit(prices))

