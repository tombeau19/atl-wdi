const express = require('express');
const router = express.Router();
const data = require('../data.js');

//INDEX PAGE FOR TODONTS(res.render - think what are we trying to render or view)
router.get('/', (req, res) => {
    res.render('todonts/index', {
        todonts: data.seededToDonts,
        numTotal: data.seededToDonts.length
    });
});

//NEW TODONT
router.get('/new', (req, res) => {
    res.render('todonts/new');
});

router.post('/', (req, res) => {
    const newtodont = req.body;
    data.seededToDonts.push(newtodont);
    res.redirect('/todonts');
});

//GET ONE SPECIFIC TODONT SHOW one
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const todont = data.seededToDonts[id]
    if (!todont) {
        res.render('todonts/show', {
            error: 'no to-dont found',
        });
    }
    res.render('todonts/show', {
        todont: todont
    });
});

// EDIT ROUTE FOR THE TODONT
router.get('/:id/edit', (req, res) => {
    res.render('todonts/edit', {
        todont: {
            id: req.params.id,
            description: data.seededToDonts[req.params.id].description,
            urgent: data.seededToDonts[req.params.id].urgent,
        }
    });
});

//SUBMITTING ACTUAL UPDATE
router.put('/:id', (req, res) => {
    const todontToEdit = data.seededToDonts[req.params.id];

    todontToEdit.description = req.body.description;
    todontToEdit.urgent = req.body.urgent;

    res.redirect('/todonts');
});

//DELETE DELETE DELETE
router.delete('/:id', (req, res) => {
    data.seededToDonts.splice(req.params.id, 1);
    res.redirect('/todonts');
});








module.exports = router;
