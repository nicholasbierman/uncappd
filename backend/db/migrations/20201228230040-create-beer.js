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
      name: {
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
      brewery_name: {
        type: Sequelize.STRING,
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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Beers');
  }
};