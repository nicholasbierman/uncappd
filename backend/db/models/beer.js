'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    beer_name: {
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
    brewery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    beer_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beer_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});
  Beer.associate = function(models) {
    // associations can be defined here
    Beer.hasMany(models.Checkin, { foreignKey: 'beer_id' });
    Beer.belongsTo(models.Brewery, { foreignKey: 'brewery_id' });
    Beer.hasOne(models.Beer_Type, { foreignKey: 'beer_type_description' });
  };
  return Beer;
};