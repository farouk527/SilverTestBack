import { Post, validateCreatePost, validateUpdatePost } from "../models/Post";
import asyncHandler from "express-async-handler";

/**
 * @desc create post
 * @route /api/post/createPost
 * @method post
 * @access only logged in users
 */
export const createPostController = asyncHandler(async (req: any, res: any) => {
  const { error } = validateCreatePost(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const { title, description, category } = req.body;

  const newPost = new Post({
    title,
    description,
    category,
    user : req.user.id
  });
  await newPost.save();
  res.status(201).json({
    message: "Post created successfully",
    post: newPost,
  });
});

/**
 * @desc Get All posts
 * @route /api/post/getposts
 * @method get
 * @access only logged in users
 */
export const getAllPostsControllers = asyncHandler(async (req: any, res: any) => {
  const posts = await Post.find().populate("user","-password");
  res.status(200).json(posts);
});

/**
 * @desc delete post
 * @route /api/post/deletepost
 * @method delete
 * @access only logged in users
 */
export const deletePostController = asyncHandler(async (req: any, res: any) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json({ message: "Post successfully deleted" });
});

/**
 * @desc update post
 * @route /api/post/updatepost
 * @method put
 * @access only logged in users
 */
export const updatePostController = asyncHandler(async (req: any, res: any) => {
  const { error } = validateUpdatePost(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const post = await Post.find({ _id: req.params.id });
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
      },
    },
    { new: true }
  ).populate("user","-password");
  res.status(200).json(updatedPost);
});
