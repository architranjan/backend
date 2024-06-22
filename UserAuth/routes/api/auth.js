const express = require('express');
const path = require('path');
const router = express.Router();
const auth = require('../../controller/auth')
router.use(express.json());
router.post('/' , auth.haddleauth)

module.exports = router;