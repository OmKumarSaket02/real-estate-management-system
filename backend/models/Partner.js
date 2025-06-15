const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Site = require('./Site');

const Partner = sequelize.define('Partner', {
  name: DataTypes.STRING,
  contact: DataTypes.STRING,
  email: DataTypes.STRING,  
  investment: DataTypes.FLOAT,
  sharePercentage: DataTypes.FLOAT,
});

Partner.belongsTo(Site, { foreignKey: 'siteId' });
Site.hasMany(Partner, { foreignKey: 'siteId' });

module.exports = Partner;
