// import express router
const router = require("express").Router();
// import asks controller
const postsCtrl = require("../controllers/posts");
// import protectedRoute middleware
const protectedRoute = require("../utils/protectedRoute");
// GET /posts
router.get("/", postsCtrl.getAllPosts);
// POST /posts
router.post("/", protectedRoute, postsCtrl.createPost);
// PUT /posts
router.post("/:id", protectedRoute, postsCtrl.updatePost);
// DELETE /posts
router.delete("/:id", protectedRoute, postsCtrl.removePost);
// export the route
module.exports = router;
