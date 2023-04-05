import { Router } from "express";
import { tweetsControllers } from "./controllers/index.js";

const router = Router();

router.get("/tweets", tweetsControllers.getTweets);

router.get("/tweets/:username", (req, res) => {
  res.send(`ROTA GET TWEETS/${JSON.stringify(req.params)}`);
});
router.post("/sign-up", (req, res) => {
  res.send(`ROTA POST SIGNUP ${JSON.stringify(req.body)}`);
});
// Username pelo header
router.post("/tweets", (req, res) => {
  res.send(`ROTA POST TWEETS: ${JSON.stringify(req.headers.user)}`);
});

export default router;
