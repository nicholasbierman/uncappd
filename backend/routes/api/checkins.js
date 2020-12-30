const router = require('express').Router();
const { Checkin } = require('../../db/models');

// GET /api/checkins/:id
router.get('/:id', async (req, res) => {
    const userCheckins = await Checkin.findAll({
        where: {
            user_id: `${req.params.id}`
        }
    });
    res.json({ checkins: userCheckins });
});





module.exports = router;