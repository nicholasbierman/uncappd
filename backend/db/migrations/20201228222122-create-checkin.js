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
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      beer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      review: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rating: {
        type: Sequelize.NUMERIC(3, 2),
        allowNull: false,
      },
      serving_style: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      purchased_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Checkins');
  }
};