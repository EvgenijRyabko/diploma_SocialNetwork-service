const { Router } = require('express');
const fileUpload = require('express-fileupload');
const {
  getMessages,
  sendMessage,
  deleteMessage,
  getDialogs,
  deleteDialog,
} = require('../../controllers/dialogs');

const router = Router();

router.get('/:id', getDialogs);

router.get('/message/:source/:target', getMessages);

router.post('/message', sendMessage);

router.delete('/message/:id', deleteMessage);

router.delete('/', deleteDialog);

module.exports = router;
