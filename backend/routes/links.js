const express = require('express')
const {
    getLink,
} = require('../controllers/linksController')

const router = express.Router()

router.get('/', getLink);

module.exports = router