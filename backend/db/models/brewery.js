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
    brewery_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_beers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    brewery_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    rating_score: {
      type: DataTypes.NUMERIC(3, 2),
      allowNull: false,
      defaultValue: 0.00
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
  };
  return Brewery;
};