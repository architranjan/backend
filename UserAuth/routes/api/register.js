const express = require('express');
const path = require('path');
const router = express.Router();
const reg = require('../../controller/register')
router.use(express.json());
router.post('/' , reg.haddleuser)

module.exports = router;