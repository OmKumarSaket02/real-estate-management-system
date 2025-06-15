const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Site = require('./Site');

const Expense = sequelize.define('Expense', {
  type: DataTypes.STRING,
  amount: DataTypes.FLOAT,
  date: DataTypes.DATE,
});

Expense.belongsTo(Site, { foreignKey: 'siteId' });
Site.hasMany(Expense, { foreignKey: 'siteId' });

module.exports = Expense;
