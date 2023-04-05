import { db } from "../../adapters/index.js";

function getTweets(req, res) {
  let page = Number(req.query.page);
  if (isNaN(page) || page <= 0) {
    page = 1;
  }
  const data = db.getTweets(page);
  res.status(200).send(JSON.stringify(data));
}

const tweetsControllers = { getTweets };

export default tweetsControllers;
