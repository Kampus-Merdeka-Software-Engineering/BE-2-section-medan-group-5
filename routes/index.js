const express = require("express");
const router = express.Router();
const userRoute = require("./user-route");
const commentRoute = require("./comment-route");

router.use("/user", userRoute);
router.use("/comment", commentRoute);

module.exports = router;
