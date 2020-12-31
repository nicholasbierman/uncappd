const router = require('express').Router();
const { Checkin, Beer, Brewery } = require('../../db/models');

// GET /api/checkins/:id
router.get('/:id', async (req, res) => {
    const userCheckins = await Checkin.findAll({
        where: {
            user_id: `${req.params.id}`
        }
    });
    res.json({ checkins: userCheckins });
});

router.get('/brewery/:id', async (req, res) => {
    const breweryCheckins = await Checkin.findAll({
        include: {
            model: Beer,
            include: {
                model: Brewery,
                where: {
                    id: `${req.params.id}`
                },
            },
            required: true,
        }
    })
    res.json({ breweryCheckins });
})

router.post('/add', async (req, res) => {
    const {
        user_id,
        beer_id,
        brewery_id,
        review,
        photo_url,
        rating,
        serving_style,
        purchased_location,
    } = req.body;

    const newCheckin = await Checkin.create({
        user_id,
        beer_id,
        brewery_id,
        review,
        photo_url,
        rating,
        serving_style,
        purchased_location,
    });

    res.json({ created: newCheckin });
});



module.exports = router;