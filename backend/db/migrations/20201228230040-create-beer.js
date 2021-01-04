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
      rating_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      rating_score: {
        type: Sequelize.NUMERIC(3, 2),
        allowNull: false,
        defaultValue: 0.00,
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
        type: Sequelize.TEXT,
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