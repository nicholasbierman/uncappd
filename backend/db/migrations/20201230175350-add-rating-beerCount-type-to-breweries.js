'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Breweries', {
      brewery_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brewery_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brewery_country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brewery_city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brewery_state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brewery_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      brewery_type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['macro', 'micro', 'nano', 'pub', 'cidery', 'meadery', 'cidery', 'contract', 'regional']]
        }
      },
      rating_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      rating_score: {
        type: Sequelize.NUMERIC(3, 2),
        allowNull: false,
        defaultValue: 0,
      },
      beer_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      brewery_logo_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      brewery_website_url: {
        type: Sequelize.STRING,
        allowNull: true, 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Breweries');
  }
};