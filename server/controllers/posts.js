import Posts from "../models/Posts.js";

export const getPosts = async (req, res) => {
  try {
    // async cause it takes time to find posts in database
    const posts = await Posts.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new Posts(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
