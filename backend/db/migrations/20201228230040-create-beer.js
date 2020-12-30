'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beer_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      abv: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      ibu: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      brewery_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      beer_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      beer_description: {
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
    return queryInterface.dropTable('Beers');
  }
};