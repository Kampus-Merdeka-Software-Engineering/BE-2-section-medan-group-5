const { comment } = require("../models");

const createComment = async (req, res) => {
	try {
		const { content, name, email } = req.body;

		const newComment = await comment.create({
			content,
			name,
			email,
		});

		res.status(201).json({
			status: true,
			data: newComment,
		});
	} catch (error) {
		res.status(500).json({ message: "Internal server error" });
	}
};

const getAllComment = async (req, res) => {
	try {
		const comments = await comment.findAll();

		res.status(201).json({
			status: true,
			results: comments,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	createComment,
	getAllComment,
};
