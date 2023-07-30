const mongoose = require('mongoose');
const Schema = mongoose.Schema

const projectSchema = new Schema({
    _id: String,
    date: String,
    title: String,
    tags: String,
    glink: String,
    llink: String,
}, { timestamps: true })

module.exports = mongoose.model('project', projectSchema)