import { tweets, users } from "./data.js";

function getUser(username) {
  return users.filter((user) => user.username === username).at(0);
}

function getTweets(page = 1) {
  const start = (page - 1) * 10;
  const lastTweets = tweets
    .slice(start, start + 10)
    .map(({ username, tweet }) => ({
      username,
      tweet,
      avatar: getUser(username)?.avatar,
    }))
    .filter(({ avatar }) => avatar !== undefined);
  return lastTweets;
}

function getTweetsUser(username) {
  const user = getUser(username);
  if (!user) {
    return [];
  }
  return tweets
    .filter((tweet) => tweet.username === username)
    .map((tweet) => ({
      ...tweet,
      avatar: user.avatar,
    }));
}

function createUser(user) {
  if (!getUser(user.username)) {
    users.push(user);
  }
  return user;
}

function createTweet(tweet) {
  tweets.push(tweet);
  return tweet;
}

const db = {
  getTweets,
  getTweetsUser,
  createUser,
  createTweet,
  getUser,
};

export default db;
