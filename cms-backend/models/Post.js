const mongoose = require('mongoose')

const postSchema = new mongoose.SchemaTypeOptions({
    title: { type: String, required: true},
    slug: {type: String, required: true, unique: true },
    content: {type: String, required: true},
    coverImage: {type: String},
    tags: [String],
    publishedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Post', postSchema)