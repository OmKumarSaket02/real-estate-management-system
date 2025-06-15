const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Site = require('./Site');

const Agent = sequelize.define('Agent', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  commission: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
});

// Relation with Site
Agent.belongsTo(Site, { foreignKey: 'siteId' });
Site.hasMany(Agent, { foreignKey: 'siteId' });

module.exports = Agent;
