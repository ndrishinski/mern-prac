const express = require('express')
const router = express.Router()

const postController = require('../controllers/post-controller')

router.get('/', postController.test)

router.post('/new', postController.new)

router.get('/posts', postController.posts)

router.delete('/post/:id', postController.delete)

module.exports = router