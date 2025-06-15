const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Landowner = require('./Landowner');

const Site = sequelize.define('Site', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.FLOAT, // Size in acres or square feet
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

Site.belogngsTo('Landowner', {
  foreignKey: 'landownerId',
});
Landowner.hasMany(Site, {
  foreignKey: 'landownerId',
});