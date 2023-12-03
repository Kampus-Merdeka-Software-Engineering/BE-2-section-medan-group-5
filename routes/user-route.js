const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/auth/login", userController.login);
router.post("/auth/register", userController.register);

module.exports = router;
