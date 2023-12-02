const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const comment = sequelize.define('comment', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  propic: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  create_at: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  description: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  timestamps: false,
  tableName: 'comment'
});
module.exports = comment
