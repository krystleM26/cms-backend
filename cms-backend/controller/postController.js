const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find().sort({ publishedAt: -1 })
  res.json(posts)
}

exports.getPostBySlug = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug })
  if (!post) return res.status(404).json({ message: 'Post not found' })
  res.json(post)
}

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body)
  const savedPost = await newPost.save()
  res.status(201).json(savedPost)
}
