const router = require('express').Router();

const { Beer, Brewery, Checkin } = require('../../db/models');

// GET /api/beers/
router.get('/', async (req, res) => {
    const beers = await Beer.findAll({
        include: { model: Checkin },
    });
    res.json({ beers: beers });
})

// GET /api/beers/:id
router.get('/:id', async (req, res) => {
    const beer = await Beer.findOne({
        where: {
            id: `${req.params.id}`,
        },
        include: { model: Checkin }
    });
    res.json({ beer });
})

module.exports = router;