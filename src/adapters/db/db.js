import { tweets, users } from "./data.js";

function getUser(username) {
  return users.filter((user) => user.username === username).at(0);
}

function getTweets(page = 1) {
  const start = (page - 1) * 10;
  return tweets.slice(start, start + 10);
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

const db = {
  getTweets,
  getTweetsUser,
};

export default db;
