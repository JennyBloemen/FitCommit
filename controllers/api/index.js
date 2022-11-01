const router = require('express').Router();
const userRoutes = require('./userRoutes');
const scheduleRoutes = require('./scheduleRoutes');

// router for /users api
router.use('/users', userRoutes);

// router for /schedule api
router.use('/schedule', scheduleRoutes);

module.exports = router;
