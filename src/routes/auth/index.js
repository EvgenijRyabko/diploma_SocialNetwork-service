const { Router } = require('express');
const { Auth, Register } = require('../../controllers/auth');

const router = Router();

router.post('/signup', Register);

router.post('/signin', Auth);

router.post('/signout');

module.exports = router;
