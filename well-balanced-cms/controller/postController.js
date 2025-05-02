const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find().sort({ publishedAt: -1 })
  console.log('📦 Returning posts:', posts.length)
  res.json(posts)
}

exports.getPostBySlug = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug })
  if (!post) return res.status(404).json({ message: 'Post not found' })
  res.json(post)
}

exports.createPost = async (req, res) => {
  try {
    console.log('🔥 HIT createPost route')
    console.log('📥 Incoming Request Body:', req.body)

    const newPost = new Post(req.body)
    const savedPost = await newPost.save()

    console.log('✅ Post saved:', savedPost)
    res.status(201).json(savedPost)
  } catch (err) {
    console.error('❌ Error creating post:', err.message)
    res.status(500).json({
      message: 'Post creation failed',
      error: err.message,
    })
  }
}