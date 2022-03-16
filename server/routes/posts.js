import express from "express";
import { getPosts, createPosts, updatePost } from "../controllers/posts.js";
const router = express.Router();

// localhosts//5000/posts

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
export default router;
