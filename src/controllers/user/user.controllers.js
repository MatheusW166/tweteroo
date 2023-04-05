import { db } from "../../adapters/index.js";

function getTweetsUser(req, res) {
  const username = req.params.username;
  const data = db.getTweetsUser(username);
  res.status(200).send(JSON.stringify(data));
}

function postTweet(req, res) {
  const username = req.headers.user;
  const tweet = req.body.tweet;
  if (!db.getUser(username)) {
    res.status(401).send("UNAUTHORIZED");
    return;
  }
  if (username && tweet && typeof tweet === "string") {
    db.createTweet({ username, tweet });
    res.status(201).send("OK");
    return;
  }
  res.status(400).send("Todos os campos são obrigatórios!");
}

function signUp(req, res) {
  const { username, avatar } = req.body;
  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }
  if (typeof username !== "string" || typeof avatar !== "string") {
    res.status(400).send("Apenas strings são aceitas");
    return;
  }
  db.createUser({ username, avatar });
  res.status(201).send("OK");
}

const userControllers = {
  getTweetsUser,
  postTweet,
  signUp,
};

export default userControllers;
