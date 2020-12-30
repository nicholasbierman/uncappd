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
        name: 'Bud Light',
        abv: 5.2,
        ibu: 45,
        brewery_id: 1,
        beer_type: 'Pilsner',
        beer_description: 'This is a description of Bud Light',
      },
      {
        name: 'Natural Light',
        abv: 5.2,
        ibu: 45,
        brewery_id: 1,
        beer_type: 'Pilsner',
        beer_description: 'This is a description of Natural Light',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    await queryInterface.bulkDelete('Beers', {
        name: { [Sequelize.Op.in]: ["Bud Light", "Natural Light"]}
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
