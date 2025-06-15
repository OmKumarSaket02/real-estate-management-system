const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Landowner = sequelize.define('Landowner', {
  name: DataTypes.STRING,
  contact: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
});

module.exports = Landowner;
