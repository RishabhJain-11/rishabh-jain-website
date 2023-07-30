const { ObjectId } = require('mongodb')
const Certification = require('../models/certificationModel')
const mongoose = require('mongoose')

const getCertificates = async (req, res) => {
    const certificates = await Certification.find({}).sort({ createdAt: -1 })
    res.status(200).json(certificates)
}

module.exports = {
    getCertificates,
}