import { db } from "../../adapters/index.js";

function getTweetsUser(req, res) {
  const username = req.params.username;
  const data = db.getTweetsUser(username);
  res.status(200).send(JSON.stringify(data));
}

const userControllers = {
  getTweetsUser,
};

export default userControllers;
