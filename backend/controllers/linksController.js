const { ObjectId } = require('mongodb')
const Links = require('../models/linksModel')
const mongoose = require('mongoose')

const getLink = async (req, res) => {
    const link = await Links.find({}).sort({ createdAt: -1 })
    res.status(200).json(link)
}

module.exports = {
    getLink,
}