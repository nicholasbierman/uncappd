'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    await queryInterface.bulkInsert('Checkins', [
      {
        user_id: 1,
        beer_id: 1,
        review: 'This beer was very hoppy!',
        rating: 3.25,
        serving_style: 'Glass',
        purchased_location: 'Uncappd at Home',
      },
      {
        user_id: 2,
        beer_id: 2,
        review: 'I really enjoyed this beer!',
        rating: 5,
        serving_style: 'Bottle',
        purchased_location: 'Three Notch Brewery',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    await queryInterface.bulkDelete('People', {user_id: { [Sequelize.Op.in]: [1, 2]}
        
      });
  }
};

// id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       user_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       beer_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       review: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       photo_url: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       rating: {
//         type: Sequelize.NUMERIC,
//         allowNull: false,
//       },
//       serving_style: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       purchased_location: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
