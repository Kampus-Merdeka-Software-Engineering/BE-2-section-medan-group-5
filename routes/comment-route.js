const express = require("express");
const commentController = require("../controllers/commentController");
const router = express.Router();

router.get("/", commentController.getAllComment);
router.post("/", commentController.createComment);

module.exports = router;
