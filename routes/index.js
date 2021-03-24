const express = require('express');
const router = express.Router();

// @desc Game page
// @route GET /

router.get('/', (req, res) => {
    res.render('game');
})

module.exports = router;