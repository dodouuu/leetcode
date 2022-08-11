/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
  const l = s.length
  let dp = Array(l+1).fill(-1)

  let sLetters = Array(26).fill(false)
  let wordDictLetters = Array(26).fill(false)
  checkLetters(sLetters, s)
  for (const element of wordDict) {
    checkLetters(wordDictLetters, element)
  }
  for (let i=0; i<26; i++) {
    if (sLetters[i] === true && wordDictLetters[i] === false)
      return false
  }

  wordDict.sort(compare)

  return recursive(l, s, wordDict, dp)
};

function recursive(remainLen, s, wordDict, dp) {
  if (s === '') return true
  if (dp[remainLen] !== -1) return dp[remainLen]

  for (const element of wordDict) {
    const i = s.indexOf(element)

    if(i === 0) {
      const ns = s.replace(element, '')
      remainLen = ns.length

      if (recursive(remainLen, ns, wordDict, dp))
        return true
    }
  }

  return dp[remainLen] = false
}
function compare(a,b) {
  return b.length - a.length
}
function checkLetters(array, str){
  for(const char of str) {
    array[char.charCodeAt(0)-97] = true
  }
}



// const s = "applepenapple", wordDict = ["apple", "pen"]

// const s = "catsandogcat"
// const wordDict = ["cats", "dog", "sand", "and", "cat", "an"]

// const s = "abcd"
// const wordDict =["a", "abc", "b", "cd"]

const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

const wordDict = ["aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa", "ba"]

console.log( wordBreak(s, wordDict) )