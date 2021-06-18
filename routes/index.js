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

// @desc Move page
// @route Get /move

router.get('/move', (req, res) => {
    res.render('move');
})

// @desc fight page
// @route Get /fight

router.get('/fight', (req, res) => {
    res.render('fight');
})
module.exports = router;