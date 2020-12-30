const router = require('express').Router();

const { Brewery } = require('../../db/models');

// GET /api/breweries/
router.get('/', async (req, res) => {
    const breweries = await Brewery.findAll();
    console.log(breweries);
    res.json({ breweries: breweries });
})

// GET /api/breweries/:id
router.get('/:id', async (req, res) => {
    const brewery = await Brewery.findOne({
        where: {
            brewery_id: `${req.params.id}`,
        }
    });
    res.json({ brewery });
})

module.exports = router;