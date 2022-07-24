/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  let a = 0
  let tempN = 0
  if (n < 0) return false
  do {
    if (n === 1) return true
    tempN = n
    a = n % 2
    if (a === 0) n /= 2
    a = n % 3
    if (a === 0) n /= 3
    a = n % 5
    if (a === 0) n /= 5
    if (tempN === n) return false
  } while (n > 1)
  return true
};

isUgly(6)