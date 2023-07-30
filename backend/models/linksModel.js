const mongoose = require('mongoose');
const Schema = mongoose.Schema

const linkSchema = new Schema({
    _id: String,
    name: String,
    link: String,
}, { timestamps: true })

module.exports = mongoose.model('link', linkSchema)