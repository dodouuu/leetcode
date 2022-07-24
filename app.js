
let Twitter = function () {
  this.timeStamp = 0
  this.posts = {}
  this.follows = {}
}

Twitter.prototype.postTweet = function (userId, tweetId) {
  // console.log('this=', this)

  if (this.posts[userId] === undefined) {
    this.posts[userId] = []
  }

  this.posts[userId].push(
    {
      timeStamp: ++this.timeStamp,
      tweetId
    }
  )
  // console.log('user=', userId, 'posts=', this.posts[userId])
}

Twitter.prototype.getNewsFeed = function (userId) {
  let arrayNewsFeed = []

  if (this.follows[userId] !== undefined) {
    this.follows[userId].forEach(followee => {
      if (this.posts[followee] !== undefined) {
        arrayNewsFeed = arrayNewsFeed.concat(this.posts[followee])
      }
    })
  }

  if (this.posts[userId] !== undefined) {
    arrayNewsFeed = arrayNewsFeed.concat(this.posts[userId])
  }

  if (arrayNewsFeed.length > 1) {
    arrayNewsFeed.sort(compareFunction)
  }

  let arrayTweetId = []

  for (let i = 0; i < 10 && arrayNewsFeed[i] !== undefined; i++) {
    arrayTweetId.push(arrayNewsFeed[i].tweetId)
  }

  console.log(arrayTweetId)

  return arrayTweetId
}
function compareFunction(a, b) {
  return b.timeStamp - a.timeStamp
}

Twitter.prototype.follow = function (followerId, followeeId) {
  if (this.follows[followerId] === undefined) {
    this.follows[followerId] = []
  }

  if (this.follows[followerId].find(userId => userId === followeeId)) {
    return
  } else {
    this.follows[followerId].push(followeeId)
  }
  console.log('user=', followerId, 'followee=', this.follows[followerId])
}

Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.follows[followerId] === undefined) {
    this.follows[followerId] = []
  }

  const index = this.follows[followerId].findIndex(userId => userId === followeeId)
  this.follows[followerId].splice(index, 1)
}

const twitter = new Twitter()

// if (this.follows[2] !== undefined) {
//   if (this.follows[2].length)
//     console.log('first followeeId of 2=', this.follows[2][0])
// }

// twitter.postTweet(1, 5)
// twitter.follow(1, 2)
// twitter.postTweet(2, 6)
// twitter.getNewsFeed(1)

twitter.postTweet(1, 6765)
twitter.postTweet(5, 671)
twitter.postTweet(3, 2868)
twitter.postTweet(4, 8148)
twitter.postTweet(4, 386)
twitter.postTweet(3, 6673)
twitter.postTweet(3, 7946)
twitter.postTweet(3, 1445)
twitter.postTweet(4, 4822)
twitter.postTweet(1, 3781)
twitter.postTweet(4, 9038)
twitter.postTweet(1, 9643)
twitter.postTweet(3, 5917)
twitter.postTweet(2, 8847)

twitter.follow(1, 3)
twitter.follow(1, 4)
twitter.follow(4, 2)
twitter.follow(4, 1)
twitter.follow(3, 2)
twitter.follow(3, 5)
twitter.follow(3, 1)
twitter.follow(2, 3)
twitter.follow(2, 1)
twitter.follow(2, 5)
twitter.follow(5, 1)
twitter.follow(5, 2)

twitter.getNewsFeed(1)
twitter.getNewsFeed(2)
twitter.getNewsFeed(3)
twitter.getNewsFeed(4)
twitter.getNewsFeed(5)
