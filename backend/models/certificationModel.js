const mongoose = require('mongoose');
const Schema = mongoose.Schema

const certificationSchema = new Schema({
    _id: String,
    year: String,
    date: String,
    img: String,
    title: String,
    content: String,
    link: String,
}, { timestamps: true })

module.exports = mongoose.model('certification', certificationSchema)