const Post = require("../model/post.model");
const getAllPosts = async (req, res) => {
  try {
    const pageNumber = req.query.pageNumber || 1;
    const pageSize = 4;
    const totalCount = await Post.countDocuments();
    const posts = await Post.find()
      .sort({ timestamp: -1 })
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    if (posts.length === 0) {
      return res.json({ message: "No more posts available" });
    }
    res.json({ posts, totalCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const { description, imagePath, title, author } = req.body;
  try {
    const newPost = new Post({
      description,
      imagePath,
      title,
      author,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleLike = async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.likes.includes(userId)) {
      post.likes.pull(userId);
      await post.save();
      res.status(201).json(post);
    } else {
      post.likes.push(userId);
      await post.save();
      res.status(201).json(post);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const isDeleted = await Post.findByIdAndDelete(postId);
    if (isDeleted) {
      console.log(isDeleted);
      return res.json(isDeleted);
    } else {
      console.log(isDeleted);

      throw new Error("Not deleted");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getMyPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const userPost = await Post.find({ "author.id": id }).sort({
      timestamp: 1,
    });
    if (!userPost || userPost.length === 0)
      return res.status(400).json({ message: "User not exist" });

    const reversedPosts = userPost.reverse();
    res.json(reversedPosts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const editPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { description } = req.body;
    const userPost = await Post.findByIdAndUpdate(
      postId,
      { description },
      {
        new: true,
      }
    );
    if (!userPost) {
      return res.json({ message: "Not Edited Data" });
    }
    res.json(userPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  getAllPosts,
  createPost,
  handleLike,
  getMyPosts,
  deletePost,
  editPost,
};
