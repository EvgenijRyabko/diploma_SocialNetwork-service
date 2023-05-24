const { Router } = require('express');
const { Auth } = require('../../controllers/auth');

const router = Router();

router.post('/signup');

router.post('/signin', Auth);

router.post('/signout');

module.exports = router;
