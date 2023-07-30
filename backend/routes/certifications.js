const express = require('express')
const {
    getCertificates,
} = require('../controllers/certificationController')

const router = express.Router()

router.get('/', getCertificates);

module.exports = router