"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("comments", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			content: {
				type: Sequelize.STRING,
			},
			name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			// userId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// 	references: {
			// 		model: "Users",
			// 		key: "id",
			// 	},
			// 	onUpdate: "CASCADE",
			// 	onDelete: "CASCADE",
			// },
			// destinationId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// 	references: {
			// 		model: "destinations",
			// 		key: "id",
			// 	},
			// 	onUpdate: "CASCADE",
			// 	onDelete: "CASCADE",
			// },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("comments");
	},
};
