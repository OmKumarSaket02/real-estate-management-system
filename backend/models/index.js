const sequelize = require('../config/db');
const Landowner = require('./Landowner');
const Site = require('./Site');
const Partner = require('./Partner');
const Expense = require('./Expense');
const Agent = require('./Agent'); // <-- Add this

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established ✅');
    await sequelize.sync({ alter: true }); // Make sure models sync
    console.log('Models synced ✅');
  } catch (err) {
    console.error('Error syncing DB ❌:', err);
  }
};

module.exports = initDb;
