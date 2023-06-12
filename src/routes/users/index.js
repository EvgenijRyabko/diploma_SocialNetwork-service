const { Router } = require('express');
const fileUpload = require('express-fileupload');
const {
  getUsers,
  getByID,
  uploadProfileImageByUser,
  uploadImagesByUser,
  getFollowersList,
  subscribe,
  unSubscribe,
} = require('../../controllers/users');

const router = Router();

router.get('/all', getUsers);

router.get('/:id/followers', getFollowersList);

router.post(
  '/uploadProfile/:id',
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 1073741824, // 1GB (число в байтах)
    },
  }),
  uploadProfileImageByUser,
);

router.post(`/upload`, uploadImagesByUser);

router.post('/subscribe', subscribe);

router.post('/unsubscribe', unSubscribe);

router.get(`/:id`, getByID);

module.exports = router;
