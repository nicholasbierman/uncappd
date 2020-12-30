const router = require('express').Router();

const { Beer, Checkin } = require('../../db/models');

// GET /api/beers/
router.get('/', async (req, res) => {
    const beers = await Beer.findAll({
        include: {model: Checkin},
    });
    console.log(beers);
    res.json({ beers: beers });
})

// GET /api/breweries/:id
router.get('/:id', async (req, res) => {
    const beer = await Beer.findOne({
        where: {
            id: `${req.params.id}`,
        }
    });
    res.json({ beer });
})

module.exports = router;