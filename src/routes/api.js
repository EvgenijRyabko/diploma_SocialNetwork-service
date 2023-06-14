const { Router } = require('express');
const authRoutes = require('./auth/index');
const postRoutes = require('./posts/index');
const usersRoutes = require('./users/index');
const dialogsRoutes = require('./dialogs/index');
const CheckToken = require('../middlewares/auth.middleware');

const router = Router();

router.use('/auth', authRoutes);

router.use('/users', CheckToken, usersRoutes);

router.use('/posts', CheckToken, postRoutes);

router.use('/dialogs', CheckToken, dialogsRoutes);

module.exports = router;
