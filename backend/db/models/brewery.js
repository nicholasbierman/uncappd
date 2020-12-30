'use strict';

const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    brewery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    brewery_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    brewery_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brewery_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brewery_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brewery_description: {
      type: DataTypes.STRING,
      allowNull: true,
  },
    brewery_logo_url: {
      type: DataTypes.STRING,
      allowNull: true,
  },
  }, {});
  Brewery.associate = function (models) {
    // associations can be defined here
    Brewery.hasMany(models.Beer, { foreignKey: 'brewery_id' });
    Brewery.belongsTo(models.Checkin, { foreignKey: 'brewery_id' });
  };
  return Brewery;
};