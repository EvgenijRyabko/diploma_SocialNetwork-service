const { Router } = require('express');
const { authRoutes } = require('./auth/authRoutes');
const { profileRoutes } = require('./profile/profileRoutes');
const { usersRoutes } = require('./users/usersRoutes');

const router = Router();

router.use('/auth', authRoutes);

router.use('/profile', profileRoutes);

router.use('/users', usersRoutes);

module.exports = router;
