const express = require("express");

const Post = require("../models/Post");

const router = express.Router();

/**
 * Get all Posts
 */
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: err });
  }
});

/**
 * Get/Read a Post
 */
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.json({ message: err });
  }
});
/**
 * Create a Post
 */
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();

    res.json(savedPost);
  } catch (error) {
    res.json({ message: err });
  }
});

/**
 * Update a Post
 */
router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (error) {
    res.json({ message: err });
  }
});

/**
 * Delete a Post
 */
router.delete("/:id", async (req, res) => {
  try {
    const removePost = await Post.deleteOne({ _id: req.params.id });
    res.json(removePost);
  } catch (error) {
    res.json({ message: err });
  }
});


module.exports = router;
