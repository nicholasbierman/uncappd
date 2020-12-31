const router = require('express').Router();

const { Brewery, Beer, Checkin } = require('../../db/models');

// GET /api/breweries/
router.get('/', async (req, res) => {
    const breweries = await Brewery.findAll();
    res.json({ breweries: breweries });
})

// GET /api/breweries/:id
router.get('/:id', async (req, res) => {
    const brewery = await Brewery.findOne({
        where: {
            id: `${req.params.id}`,
        },
        include: {
            model: Beer,
            include: {
                model: Checkin
            }}
    });
    res.json({ brewery });
})

module.exports = router;