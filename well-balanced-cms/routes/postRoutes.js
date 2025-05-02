const express = require('express')
const { getPosts, getPostBySlug, createPost } = require('../controller/postController')
const router = express.Router()

router.get('/', getPosts)
router.get('/:slug', getPostBySlug)
router.post('/', createPost)

module.exports = router
