const { Router } = require('express');
const { getPosts, createPost, deletePost } = require('../../controllers/posts');

const router = Router();

router.get('/:id', getPosts);

router.post('/:id', createPost);

router.delete('/:id', deletePost);

module.exports = router;
