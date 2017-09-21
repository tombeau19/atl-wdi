const express = require('express');
const router = express.Router();
const data = require('../models/pirates.js');

/* INDEX PIRATES */
router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates: data,
        numTotal: data.length
    });
});

/* NEW PIRATES */
router.get('/new', (req, res) => {
    res.render('pirates/new')
});

router.post('/', (req, res) => {
    const newPirate = req.body;
    data.push(newPirate);
    res.redirect('/pirates');
});

/* SHOW PIRATES */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = data[id];
    res.render('pirates/show', {
        pirate: pirate
    });
});

//EDIT ROUTE ONCE PIRATE IS CLICKED
router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
        pirate: {
            id: req.params.id,
            name: data[req.params.id].name,
            birthplace: data[req.params.id].birthplace,
            death_year: data[req.params.id].death_year,
            base: data[req.params.id].base,
            nickname: data[req.params.id].nickname,
        }
    });
});

//UPDATE UPDATE FROM EDIT ROUTE
router.put('/:id', (req, res) => {
    const pirateToEdit = data[req.params.id];

    pirateToEdit.name = req.body.name;
    pirateToEdit.birthplace = req.body.birthplace;
    pirateToEdit.death_year = req.body.death_year;
    pirateToEdit.base = req.body.base;
    pirateToEdit.nickname = req.body.nickname;

    res.redirect('/pirates');
})

//DELETE ROUTE
router.delete('/:id', (req, res) => {
    data.splice(req.params.id, 1)
    res.redirect('/pirates');
})





module.exports = router;




