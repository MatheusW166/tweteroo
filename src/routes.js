import { Router } from "express";
import { tweetsControllers, userControllers } from "./controllers/index.js";

const router = Router();

router.get("/tweets", tweetsControllers.getTweets);
router.get("/tweets/:username", userControllers.getTweetsUser);
router.post("/sign-up", userControllers.signUp);
router.post("/tweets", userControllers.postTweet);

export default router;
