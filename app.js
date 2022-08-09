/**
 * @param {string} s
 * @return {number}
 */
const LENGTH = 50000
var lengthOfLongestSubstring = function (s) {
  if(s==='') {
    return 0
  }
  let longestLen = 1
  let sub = []
  const l = s.length
  sub.push(s[0])
  let dp = new Array(LENGTH).fill(0)
  dp[0] = 1
  let index = -1
  for (let i=1; i<l; i++) {
    index = sub.indexOf(s[i])
    subLen = sub.length
    if (index !== -1) {
      sub = sub.slice(index+1)
      dp[i] = subLen - index
      sub.push(s[i])
    } else {
      sub.push(s[i])
      dp[i] = dp[i-1]+1
      if (dp[i] > longestLen) {
        longestLen = dp[i]
      }
    }
    // print(index,sub, dp, longestLen)
  }
  return longestLen
};

const s = "bbtablud"

lengthOfLongestSubstring(s)
function print(index,sub, dp, longestLen) {
  console.log('index=', index, 'sub=', sub, 'dp=', dp, 'longestLen=', longestLen)
}

