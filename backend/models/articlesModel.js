const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articleSchema = new Schema({
    _id: String,
    title: String,
    content: String,
    link: String,
}, { timestamps: true })

module.exports = mongoose.model('article', articleSchema)