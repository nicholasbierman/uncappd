'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer_Type = sequelize.define('Beer_Type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beer_type_description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Beer_Type.associate = function(models) {
    // associations can be defined here
  };
  return Beer_Type;
};