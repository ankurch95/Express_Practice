const express = require('express')
const { generateShortUrl,handleGetAnalytics } = require('../controllers/url')
const router = express.Router()

router.post('/', generateShortUrl)
router.get('/analytics/:shortId',handleGetAnalytics)
module.exports = router