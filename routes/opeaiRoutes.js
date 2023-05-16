const express = require('express');
const router = express.Router();

const { generateImage } = require('../controllers/openaiControllers')

router.post('/generateimage', (req, res) => generateImage(req, res))

module.exports = router;