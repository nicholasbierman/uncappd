'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Checkins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      beer_id: {
        type: Sequelize.INTEGER
      },
      review: {
        type: Sequelize.STRING
      },
      photo_url: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.NUMERIC
      },
      serving_style: {
        type: Sequelize.STRING
      },
      purchased_location: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Checkins');
  }
};