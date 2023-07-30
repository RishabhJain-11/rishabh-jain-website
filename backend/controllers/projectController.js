const { ObjectId } = require('mongodb')
const Project = require('../models/projectsModel')
const mongoose = require('mongoose')

const getProject = async (req, res) => {
    const project = await Project.find({}).sort({ createdAt: -1 })
    res.status(200).json(project)
}

module.exports = {
    getProject,
}