const express = require('express');
const router = express.Router();
const data = require('../data.js');


/* INDEX TODOS */
router.get('/', (req,res) => {
    res.render('todos/index', {
      todos: data.seededTodos,
      numTotal: data.seededTodos.length
    });
});

/* NEW TODO */
router.get('/new', (req, res) => {
    res.render('todos/new');
})

router.post('/', (req, res) => {
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.redirect('/todos');
});

/* SHOW TODOS*/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];
    if (!todo) {
        res.render('todos/show', {
            error: 'No to-do found'
        })
    }
    res.render('todos/show', {
        todo: todo
    });
});

/* EDIT ROUTE FOR THE TODO */
router.get('/:id/edit', (req, res) => {
    res.render('todos/edit', {
        todo: {
            id: req.params.id,
            description: data.seededTodos[req.params.id].description,
            urgent: data.seededTodos[req.params.id].urgent,
            location: data.seededTodos[req.params.id].location,
        }
    });
});

/* UPDATE ROUTE UPDATE ROUTE */
router.put('/:id', (req, res) => {
    const todoToEdit = data.seededTodos[req.params.id];

    todoToEdit.description = req.body.description;
    todoToEdit.urgent = req.body.urgent;
    todoToEdit.location = req.body.location;

    res.redirect('/todos');
});

/* DELETE TODO */
router.delete('/:id', (req, res) => {
    data.seededTodos.splice(req.params.id, 1);

    res.redirect('/todos');
});


  module.exports = router;