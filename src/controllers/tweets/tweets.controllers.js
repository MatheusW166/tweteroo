import { db } from "../../adapters/index.js";

function getTweets(req, res) {
  let page = req.query.page;

  if (!page) {
    const data = db.getTweets(1);
    res.status(200).send(JSON.stringify(data));
    return;
  }

  page = Number(page);
  if (isNaN(page) || page <= 0) {
    res.status(400).send("Informe uma página válida!");
    return;
  }

  const data = db.getTweets(page);
  res.status(200).send(JSON.stringify(data));
}

const tweetsControllers = { getTweets };

export default tweetsControllers;
