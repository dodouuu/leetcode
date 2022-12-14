/**
 * @param {string} password
 * @return {number}
 */
let needUpper = 1
let needLower = 1
let needDigit = 1
let replace = 0
let one = 0
let two = 0

var strongPasswordChecker = function (password) {
  const l = password.length

  needUpper = 1
  needLower = 1
  needDigit = 1
  replace = 0
  one = 0
  two = 0

  countWeak(password)
  let weak = needUpper + needLower + needDigit

  if (l < 6) {
    return Math.max(6-l, weak)
  } else if (l <= 20) {
    return Math.max(replace, weak)
  } else { // length > 20
    let over = l-20
    
    replace -= Math.min(one, over)
    if(over-one > 0) {
      replace -= Math.min( Math.floor(two/2), Math.floor((over-one)/2))
    }

    if(over - one - two > 0) {
      replace -= Math.floor((over-one-two)/3)
    }

    return over + Math.max(weak, replace)
  }
}
function countWeak(password) {
  const l = password.length
  for (let i = 0; i < l; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      needUpper = 0
    } else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      needLower = 0
    } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      needDigit = 0
    }

    let repeatChar = 1
    while (password[i] === password[i + 1]) {
      repeatChar++
      i++
    }

    if(repeatChar >= 3) {
      replace += Math.floor((repeatChar/3))
      if (repeatChar % 3 === 0) one ++
      else if (repeatChar % 3 === 1) two +=2
    }
  }
}

const password = "aaaaabbbb1234567890ABA"
console.log('length=', password.length)

console.log('strongPasswordChecker=', strongPasswordChecker(password))

console.log('replace=', replace)
console.log('one=', one)
console.log('two=', two)