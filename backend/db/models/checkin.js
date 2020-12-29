'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define('Checkin', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    beer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brewery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255]
      }  
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.NUMERIC(3, 2),
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: 'Rating cannot be fewer than 0 stars',
        },
        max: {
          args: [5],
          msg: 'Rating cannot be greater than 5 stars',
        }
      }
    },
    serving_style: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchased_location: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Checkin.associate = function(models) {
    // associations can be defined here
  };
  return Checkin;
};