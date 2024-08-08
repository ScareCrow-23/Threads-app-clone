import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
  createPost,
  deletePost,
  getFeedPost,
  getPost,
  likeUnlikePost,
  replyToPost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPost);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/reply/:id", protectRoute, replyToPost);

export default router;
