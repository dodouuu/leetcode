/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  const l = arr.length
  if (l === 1) return 0

  let adjacent = {}

  let visited = Array(l).fill(false)

  for (let i = 0; i < l; i++) {
    if (adjacent[arr[i]] === undefined) {
      adjacent[arr[i]] = []
      adjacent[arr[i]].push(i)
    } else {
      adjacent[arr[i]].push(i)
    }
  }

  return bfs(0, arr, adjacent, visited)
};

function bfs(steps, arr, adjacent, visited) {
  let queue = []
  const l = arr.length
  queue.push(l - 1)
  visited[l - 1] = true
  while (queue.length) {
    let q = queue.length
    while (q--) {
      const i = queue.shift()

      if (i + 1 < l && visited[i + 1] === false) {
        queue.push(i + 1)
        visited[i + 1] = true
      }
      if (i - 1 >= 0 && visited[i - 1] === false) {
        queue.push(i - 1)
        visited[i - 1] = true
      }
      for (let j = 0; j < adjacent[arr[i]].length; j++) {
        if (visited[adjacent[arr[i]][j]] === false) {
          queue.push(adjacent[arr[i]][j])
          visited[adjacent[arr[i]][j]] = true
        }
      }
      adjacent[arr[i]].length = 0
    }

    steps ++
    if(visited[0] === true) return steps
  }
}

const arr = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404]

console.log(minJumps(arr))