const express = require('express');
const router = express.Router();
const data = require('../data.js');


router.get('/', (req, res) => {
    res.render('recipes/index', {
        recipes: data.seededRecipes
    });
});

module.exports = router;
