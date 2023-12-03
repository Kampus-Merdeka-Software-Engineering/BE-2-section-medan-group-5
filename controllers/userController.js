const { User } = require("../models");
const bcrypt = require("bcrypt");
const { SECRET_KEY } = require("../constants");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		res.status(201).json({ message: "User registered successfully", user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ where: { email } });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const validPassword = await bcrypt.compare(password, user.password);

		if (!validPassword) {
			return res.status(401).json({ message: "Invalid password" });
		}

		const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY);

		res
			.status(200)
			.json({ message: "Login successful", token, role: user.role });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	login,
	register,
};
