const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const movieshowRoutes = require('./movieshow-routes.js');

router.use('/user', userRoutes);
router.use('/movieshows', movieshowRoutes);

module.exports = router;