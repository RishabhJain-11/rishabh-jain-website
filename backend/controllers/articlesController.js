const { ObjectId } = require('mongodb')
const Articles = require('../models/articlesModel')
const mongoose = require('mongoose')

const getArticle = async (req, res) => {
    const article = await Articles.find({}).sort({ createdAt: -1 })
    res.status(200).json(article)
}

module.exports = {
    getArticle,
}