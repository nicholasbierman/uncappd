const router = require('express').Router();
const { User,Checkin, Beer, Brewery } = require('../../db/models');

// GET /api/checkins/:id
router.get('/:id', async (req, res) => {
    const userCheckins = await User.findAll({
        include: {
            model: Checkin,
            where: {
                user_id: `${req.params.id}`
            },
            include: [ Beer ],
            required: true,
        }
    });
    res.json({ userCheckins });
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

// POST /checkins/add
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