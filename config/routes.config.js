const express = require("express");
const router = express.Router();
const posts = require("../controllers/posts.controller");

// POSTS
router.post("/posts", posts.createPost);
router.get("/posts", posts.listPosts);
router.get("/posts/:id", posts.detailPost);
router.patch("/posts/:id", posts.updatePost);
router.delete("/posts/:id", posts.deletePost);

router.get("/", (req, res) => {
  res.send(`<h1>Master INESDI Modulo 5 | Actividad 2</h1>`);
});

module.exports = router;
