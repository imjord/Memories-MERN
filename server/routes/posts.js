import express from "express";
import { getPosts } from "../controllers/posts.js";
const router = express.Router();

// localhosts//5000/posts

router.get("/", getPosts);

export default router;
