const express = require('express')
const {
    getArticle,
} = require('../controllers/articlesController')

const router = express.Router()

router.get('/', getArticle);

module.exports = router