import { tweets, users } from "./data.js";

function getTweets(page = 1) {
  const start = (page - 1) * 10;
  return tweets.slice(start, start + 10);
}

const db = {
  getTweets,
};

export default db;
