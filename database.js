const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('revou', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize