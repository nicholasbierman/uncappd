'use strict';

const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    location: {
      type: DataTypes.STRING,
      allowNull: false
  },
    description: {
      type: DataTypes.STRING,
      allowNull: false
  },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: false
  },
  }, {});
  Brewery.associate = function(models) {
    // associations can be defined here
    
  };
  return Brewery;
};