/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const l = s.length
  let dp = Array(l+1).fill(-1)
  const array = []

  let sLetters = Array(26).fill(false)
  let wordDictLetters = Array(26).fill(false)
  checkLetters(sLetters, s)
  for (const element of wordDict) {
    checkLetters(wordDictLetters, element)
  }
  for (let i=0; i<26; i++) {
    if (sLetters[i] === true && wordDictLetters[i] === false)
      return array
  }

  wordDict.sort(compare)

  recursive(array, '', l, s, wordDict, dp)
  return array
};

function recursive(array, outputStr, remainLen, s, wordDict, dp) {
  if (s === '') {
    const l = outputStr.length
    array.push(outputStr.slice(0, l - 1))
    return true
  }
  if (dp[remainLen] !== -1) return dp[remainLen]

let hasSolution = false

  for (const element of wordDict) {
    const i = s.indexOf(element)

    if(i === 0) {
      const ns = s.replace(element, '')
      const newOutput = outputStr.concat(element, ' ')

      if (recursive(array, newOutput, ns.length, ns, wordDict, dp))
        hasSolution = true
    }
  }
  if (hasSolution === false) {
    return dp[remainLen] = false
  } else {
    return true
  }
}
function compare(a,b) {
  return b.length - a.length
}
function checkLetters(array, str){
  for(const char of str) {
    array[char.charCodeAt(0)-97] = true
  }
}


const s = "pineapplepenapple"
const wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]

// const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

// const wordDict = ["aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa", "ba"]

console.log( wordBreak(s, wordDict) )