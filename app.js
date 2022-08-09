/**
 * @param {string} s
 * @return {string}
 */
let s = "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"

let tempPal = []
var longestPalindrome = function (s) {
  const lenS = s.length
  let half = Math.floor(lenS /2)
  let temp = 0
  let max = 0
  let maxPal = []
  while (half >= 0) {
    l = half-1
    r = half+1
    temp = 0
    tempPal = []
    tempPal.push(s[half])
    temp = Palindromic(l, r, lenS, s) + 1
    if(temp > max) {
      max = temp
      maxPal = Array.from(tempPal)
    }
    if (half + 1 < lenS && s[half+1] === s[half]) {
      rr = r+1
      temp = 0
      tempPal = []
      tempPal.push(s[half])
      tempPal.push(s[half+1])
      temp = Palindromic(l, rr, lenS, s) + 2
      if (temp > max) {
        max = temp
        maxPal = Array.from(tempPal)
      }
    }
    half--
  }

  half = Math.floor(lenS / 2)
  while (half < lenS) {
    l = half - 1
    r = half + 1
    temp = 0
    tempPal = []
    tempPal.push(s[half])
    temp = Palindromic(l, r, lenS, s) + 1
    if (temp > max) {
      max = temp
      maxPal = Array.from(tempPal)
    }
    if (half + 1 < lenS && s[half + 1] === s[half]) {
      rr = r + 1
      temp = 0
      tempPal = []
      tempPal.push(s[half])
      tempPal.push(s[half + 1])
      temp = Palindromic(l, rr, lenS, s) + 2
      if (temp > max) {
        max = temp
        maxPal = Array.from(tempPal)
      }
    }
    half++
  }
  let str = maxPal.toString()
  str = str.split(',').join('')
  return str
};

function Palindromic(l, r, lenS, s) {
  let len = 0
  while(1) {
    if (l < 0) break
    if (r >= lenS) break
    if (s[l] !== s[r]) break
    tempPal.unshift(s[l])
    tempPal.push(s[r])
    len += 2
    l--
    r++
  }
  // print(len, tempPal)
  return len
}

longestPalindrome(s)

function print(temp, tempPal) {
  console.log('temp=', temp, 'tempPal=', tempPal)
}
