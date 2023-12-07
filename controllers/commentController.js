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
		// const comments = await comment.findAll();
		const data = [{
			"content": "ini testing",
			"name": "indah",
			"email": "indah@indah.com",
			"createdAt": "23 Maret 2023 10:30"
		},
		{
			"content": "ini testing",
			"name": "fik",
			"email": "fik@fik.com",
			"createdAt": "21 February 2022 10:30"
		}]

		res.status(201).json({
			status: true,
			results: data,
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
