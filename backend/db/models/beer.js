'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    abv: {
      type: DataTypes.NUMERIC(3, 2),
      allowNull: false,
    },
    ibu: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brewery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    beer_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beer_description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Beer.associate = function(models) {
    // associations can be defined here
    //Beer.hasOne(Beer_Type, {foreignKey: 'beer_type_description'});
    //Beer.belongsTo(Brewery, {foreignKey: 'brewery_id'})
  };
  return Beer;
};