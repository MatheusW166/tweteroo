import { Router } from "express";
import { tweetsControllers, userControllers } from "./controllers/index.js";

const router = Router();

router.get("/tweets", tweetsControllers.getTweets);
router.get("/tweets/:username", userControllers.getTweetsUser);

router.post("/sign-up", (req, res) => {
  res.send(`ROTA POST SIGNUP ${JSON.stringify(req.body)}`);
});
// Username pelo header
router.post("/tweets", (req, res) => {
  res.send(`ROTA POST TWEETS: ${JSON.stringify(req.headers.user)}`);
});

export default router;
