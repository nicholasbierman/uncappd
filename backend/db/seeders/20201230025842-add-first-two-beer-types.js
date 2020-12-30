'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    await queryInterface.bulkInsert('Beer_Types', [
      {
        beer_type_name: 'Stout - Imperial / Double',
        beer_type_description: 'The imperial stout is the strongest in alcohol and body of the stouts. Black in color, these beers typically have an extremely rich malty flavor and aroma with full, sweet malt character. Bitterness can come from roasted malts or hop additions',
      },
      {
        beer_type_name: 'Winter Ale',
        beer_type_description: 'A stronger, darker, spiced beer that often has a rich body and warming finish suggesting a good accompaniment for the cold winter season.',
      }
      ], {});
  },
  down: async (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    await queryInterface.bulkDelete('Beer_Types', {beer_type_name: { [Sequelize.Op.in]: ['Stout - Imperial / Double', 'Winter Ale']}});
  }
};
//  id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       beer_type_description: {
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
