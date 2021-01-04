'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    await queryInterface.bulkInsert('Beers', [
      {
        beer_name: 'Bud Light',
        abv: 5.2,
        ibu: 45,
        brewery_id: 1,
        beer_type: 'Pilsner',
        rating_count: 2510,
        rating_score: 4.74,
        beer_description: 'This is a description of Bud Light',
      },
      {
        beer_name: 'Natural Light',
        abv: 5.2,
        ibu: 45,
        brewery_id: 1,
        beer_type: 'Pilsner',
        rating_count: 14999,
        rating_score: 4.74,
        beer_description: 'This is a description of Natural Light',
      },
      {
        beer_name: 'Kentucky Brunch Brand Stout',
        abv: 12,
        ibu: 0,
        beer_type: 'Stout - Imperial / Double',
        brewery_id: 2,
        rating_count: 2546,
        rating_score: 4.74,
        beer_description: 'This beer is the real McCoy. Barrel aged and crammed with coffee, none other will stand in its way. Sought out for being delicious, it is notoriously difficult to track down. If you can find one, shoot to kill, because it is definitely wanted... dead or alive.',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    await queryInterface.bulkDelete('Beers', {
        beer_name: { [Sequelize.Op.in]: ["Bud Light", "Natural Light", "Kentucky Brunch Brand Stout"]}
      });
  }
};

// id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     abv: {
//       type: DataTypes.NUMERIC(3, 2),
//       allowNull: false,
//     },
//     ibu: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     brewery_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     beer_type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     beer_description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
//   }, {});
