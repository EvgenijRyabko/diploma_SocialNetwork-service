const { Router } = require('express');
const authRoutes = require('./auth/index');
const postRoutes = require('./posts/index');
const usersRoutes = require('./users/index');
const dialogsRoutes = require('./dialogs/index');

const router = Router();

router.use('/auth', authRoutes);

router.use('/users', usersRoutes);

router.use('/posts', postRoutes);

router.use('/dialogs', dialogsRoutes);

module.exports = router;
