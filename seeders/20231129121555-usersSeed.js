"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Users", [
			{
				name: "Administator",
				email: "admin@gmail.com",
				password: await bcrypt.hash("123456", 10),
				role: "admin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "User",
				email: "user@gmail.com",
				password: await bcrypt.hash("123456", 10),
				role: "user",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
	},
};
