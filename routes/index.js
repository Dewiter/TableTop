const express = require('express');
const router = express.Router();

// @desc Welcome page
// @route GET /

router.get('/', (req, res) => {
    res.render('mainPage');
})

// @desc Map page
// @route Get /map

router.get('/map', (req, res) => {
    res.render('map');
})

module.exports = router;