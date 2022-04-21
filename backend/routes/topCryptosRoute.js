const express = require('express');
const router = express.Router();

const { getTopTenCryptos } = require('../controllers/topCryptosController');

router.route('/').get(getTopTenCryptos);

module.exports = router