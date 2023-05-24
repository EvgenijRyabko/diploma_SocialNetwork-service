const { Router } = require('express');
const {
  getUsers,
  getByID,
  uploadProfileImageByUser,
  uploadImagesByUser,
} = require('../../controllers/users');

const router = Router();

router.get('/all', getUsers);

router.post('/uploadProfile/:id', uploadProfileImageByUser);

router.post(`/upload`, uploadImagesByUser);

router.get(`/:id`, getByID);

module.exports = router;
