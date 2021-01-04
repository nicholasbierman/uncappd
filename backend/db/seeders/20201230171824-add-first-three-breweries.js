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
        brewery_name: "Schramm's Mead",
        brewery_country: 'United States',
        brewery_city: 'Ferndale',
        num_beers: 16,
        brewery_state: 'MI',
        brewery_type: 'meadery',
        rating_count: 102069,
        rating_score: 4.52,
        beer_count: 125,
        brewery_description: "Schramm’s Mead offers craft mead and beverages made with unmatched recipes and bold ingredients, which reflect an uncompromising commitment to quality. We support local beekeepers and suppliers and strive continuously for sustainability. Schramm's enthusiastically supports the reputation and growth of the mead industry"
      },
      {
        brewery_name: "Emperor's Brewery",
        brewery_country: 'England',
        brewery_city: 'Coalville',
        num_beers: 25,
        brewery_state: 'Leicestershire',
        brewery_type: 'nano',
        beer_count: 44,
        rating_count: 1180,
        rating_score: 4.51,
        brewery_description: "A long time ago, in a brewery far, far away....a keen home brewer had a dream to produce the greatest Imperial Stouts and Porters the galaxy had ever seen. That dream is Emperor's Brewery. This will be a day long remembered...",
      },
      {
        brewery_name: 'Funktastic Meads',
        brewery_country: 'United States',
        brewery_city: 'Amherst',
        num_beers: 56,
        brewery_state: 'VA',
        brewery_type: 'meadery',
        beer_count: 93,
        rating_count: 2506,
        rating_score: 4.51,
      },
      {
        brewery_name: "Boneflower Craft Mead",
        brewery_country: "United States",
        brewery_city: "St. John",
        num_beers: 98,
        brewery_state: "IN",
        brewery_type: "meadery",
        beer_count: 32,
        rating_count: 5385,
        rating_score: 4.46,
        brewery_description: "Craft Mead from Northwest Indiana"
      }
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
