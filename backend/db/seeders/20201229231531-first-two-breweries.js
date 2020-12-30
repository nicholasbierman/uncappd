'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    await queryInterface.bulkInsert('Breweries', [
      {
        brewery_name: 'Sixpoint Brewery',
        brewery_country: 'United States',
        brewery_city: 'Brooklyn',
        brewery_state: 'NY',
        brewery_type: 'macro',
        brewery_description: 'Located in Brooklyn, NY, Sixpoint is a great place to kick back and relax with friends',
      },
      {
        brewery_name: 'Pips Meadery',
        brewery_country: 'United States',
        brewery_city: 'Beach Park',
        brewery_state: 'IL',
        brewery_type: 'micro',
        brewery_description: 'We have a passion for all things wine, but are primarily focused on mead. Playing most frequently in the dessert category, we are willing to push the boundaries at times and stretch past balance to bring out intense flavors and unique combinations in our products. We appreciate all feedback on our products and we strive for continuous improvement in our recipes.'
      },
      {
        brewery_name: 'Smooj',
        brewery_country: 'United States',
        brewery_city: 'Ann Arbor',
        brewery_state: 'MI',
        brewery_type: 'nano',
        brewery_description: "itty bitty Ann Arbor side hustle, OG smooj producer, heavily fruited hard seltzers, a child of Troobado"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    await queryInterface.bulkDelete('Breweries', {
        brewery_name: { [Sequelize.Op.in]: ["Sixpoint Brewery", "Pips Meadery", "Smooj"]}
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
//       allowNull: false
//   },
//     location: {
//       type: DataTypes.STRING,
//       allowNull: false
//   },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false
//   },
//     logo_url: {
//       type: DataTypes.STRING,
//       allowNull: false
//   },
//   }, {});