const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  handleLike,
  getMyPosts,
  deletePost,
  editPost,
} = require("../controllers/post.controller");

router.get("/post", getAllPosts);
router.post("/", createPost);
router.get("/myPost/:id", getMyPosts);
router.post("/:postId/handlelike", handleLike);
router.delete("/:postId/delete", deletePost);
router.put("/:postId/edit", editPost);

module.exports = router;
